import React, { useEffect ,useState} from "react";
import { Button, Icon, MenuItem, Menu } from "@material-ui/core";
import { NavLink, withRouter } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const more = <FormattedMessage id="home.category.More" defaultMessage="more" />;

const showCount = 6;

const FoodList = ({ getRestaurantCategories, categorise, city }) => {
  useEffect(() => {
    getRestaurantCategories();
  }, [getRestaurantCategories]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="flex flex-wrap my-10 mx-32 text-2xl" id="nav">
      {categorise.slice(0, showCount).map(({ name, id, link }, index) => (
        <NavLink
          exact
          className="food__items food__items--active"
          to={process.env.PUBLIC_URL + "/" + city.title + "/" + link}
          key={id}
        >
          {name}
        </NavLink>
      ))}
      {categorise.length > showCount && (
        <Button
          className={`food__items ${selectedIndex && "food__items--active"}`}
          onClick={handleClickListItem}
          endIcon={<Icon>keyboard_arrow_down</Icon>}
        >
          {selectedIndex
            ? categorise.slice(showCount)[selectedIndex].name
            : more}
        </Button>
      )}
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {categorise.slice(showCount).map(({ name, id, link }, index) => (
          <MenuItem
            key={id}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <NavLink
              exact
              to={process.env.PUBLIC_URL + "/" + city.title + "/" + link}
              key={id}
            >
              {name}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
};

export default withRouter(FoodList);
