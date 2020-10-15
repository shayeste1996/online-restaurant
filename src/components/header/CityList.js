import React from "react";
import { makeStyles, List, ListItem, ListItemText } from "@material-ui/core";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { cityChange } from "store/city";
import { closePopover } from "store/popover";

const useStyles = makeStyles((theme) => ({
  listItem: {
    color: "inherit!important",
    textDecoration: "none!important",
    height: 40,
    width: "100%",
    paddingLeft: 24,
    paddingRight: 12,
  },
}));

const CityList = ({ cities, cityChange, city, closePopover }) => {
  const classes = useStyles();
  const cityOnChange = (item) => {
    cityChange(item);
    closePopover();
  };

  return (
    <List>
      {cities.map((item, index) => (
        <ListItem
          button
          component={NavLink}
          to={item.name}
          className={classes.listItem}
          key={index}
          onClick={() => cityOnChange(item)}
        >
          <ListItemText
            className="truncate pr-0"
            primary={item.name}
            disableTypography={true}
          />
        </ListItem>
      ))}
    </List>
  );
};
const mapStateToProps = (state) => ({
  cities: state.city.cities,
  city: state.city.current,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      cityChange,
      closePopover,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
