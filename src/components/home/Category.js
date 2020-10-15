import React, { useEffect } from "react";
import {
  makeStyles,
  Button,
  Icon,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { getRestaurantCategories } from "store/restaurant";
import { openPopover, closePopover } from "store/popover";
import { bindActionCreators } from "redux";

import Sort from "./Sort";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #f5f5f5",
    justifyContent: "space-between",
  },
  nav: {
    margin: "21px 80px",
    display: "flex",
    flexWrap: "wrap",
  },
  LinkButton: {
    height: 46,
    marginRight: 4,
    padding: "0 12px",
    display: "block",
    lineHeight: 3,
    borderRadius: 22,
    color: "black",
    "&:hover": {
      background: "#f5f5f5",
    },
  },
  active: {
    background: "rgb(255, 224, 51)",
  },
  button: {
    borderRadius: 22,
    padding: 8,
    outline: "none !important",
  },
  listItem: {
    color: "inherit!important",
    textDecoration: "none!important",
    height: 40,
    width: "calc(100% - 16px)",
    borderRadius: "0 20px 20px 0",
    paddingLeft: 24,
    paddingRight: 12,
  },
  sortButton: {
    margin: '0px 80px',
    color: "#000000",
    padding: "12px 16px",
    maxWidth: "150px",
    fontSize: "15px",
    lineHeight: "1.2",
    borderRadius: "28px",
    backgroundColor: "#f5f5f5",
    transitionDuration: "200ms",
    transitionProperty: "background-color, color",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  sortRoot: {
    minHeight: 400,
    width: 300,
  },
}));
const more = (
  <FormattedMessage id="home.category.More" defaultMessage="More" />
);
const sort = (
  <FormattedMessage id="home.category.Sort" defaultMessage="Sorting" />
);

const showCount = 10;

const Category = ({
  getRestaurantCategories,
  categorise,
  openPopover,
  closePopover,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getRestaurantCategories();
  }, [getRestaurantCategories]);

  const RestCategories = () => (
    <List>
      {categorise.slice(showCount).map(({ name, id }, index) => (
        <ListItem
          button
          component={NavLink}
          to={name}
          className={classes.listItem}
          key={index}
          onClick={closePopover}
        >
          <ListItemText
            className="truncate pr-0"
            primary={name}
            disableTypography={true}
          />
        </ListItem>
      ))}
    </List>
  );

  const categoryClick = (event) => {
    openPopover(event.currentTarget, {
      children: <RestCategories />,
      classes: { paper: "w-64 h-auto" },
    });
  };
  const sortClick = (event) => {
    openPopover(event.currentTarget, {
      children: <Sort />,
      classes: { paper: "w-64 h-auto" },
    });
  };

  return (
    <div className={classes.root}>
      <nav className={classes.nav} id="nav">
        {categorise.slice(0, showCount).map(({ name, id }, index) => (
          <NavLink
            exact
            className={classes.LinkButton}
            to={name}
            activeClassName={classes.active}
            key={index}
          >
            {name}
          </NavLink>
        ))}
        {categorise.length > showCount && (
          <Button
            className={classes.button}
            onClick={categoryClick}
            endIcon={<Icon>keyboard_arrow_down</Icon>}
          >
            {more}
          </Button>
        )}
      </nav>
      <div className={classes.sortButton} onClick={sortClick}>
        <Icon className="mr-2">sort</Icon>
        <span>{sort}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categorise: state.restaurant.restaurantCategorise,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getRestaurantCategories,
      openPopover,
      closePopover,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
