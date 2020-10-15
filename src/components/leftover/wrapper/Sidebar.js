import React, { useEffect } from "react";
import { makeStyles, List, ListItem } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRestaurantCategories } from "store/restaurant";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "99px",
    height: "100%",
    marginRight: "8px",
  },
  wrapper: {
    width: "350px",
    overflow: "hidden",
    //"marginRight": "10px",
    borderRadius: "4px",
    backgroundColor: "#f2f2f2",
  },
  sidebarTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "3.4",
    paddingLeft: "20px",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "#e3e3e3",
  },
  list: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  listItem: {
    cursor: "pointer",
    minHeight: "60px",
    paddingLeft: "20px",
    paddingTop: "0px",
    paddingBottom: "0px",
    "&.active": {
      backgroundColor: "#e3e3e3",
      color: theme.palette.secondary.contrastText + "!important",
      pointerEvents: "none",
      "& .list-item-icon": {
        color: "inherit",
      },
    },
    "&:hover": {
      backgroundColor: "#e3e3e3",
    },
  },
  listItemContent: {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "#e3e3e3",
    display: "flex",
    alignItems: "flex-start",
    paddingTop: "15px",
    paddingRight: "30px",
    paddingBottom: "15px",
    justifyContent: "flex-start",
    width: "100%",
  },
  listItemName: {
    fontSize: "17px",
    textAlign: "left",
    paddingTop: "5.5px",
    lineHeight: "1.1875",
    paddingBottom: "5.5px",
    color: "black",
  },
  listItemCount: {
    color: "#b0b0b0",
    fontSize: "16px",
    paddingTop: "5.5px",
    marginLeft: "12px",
    lineHeight: "1.1875",
    paddingBottom: "5.5px",
  },
}));

const Sidebar = ({ getRestaurantCategories, categorise }) => {
  const classes = useStyles();

  useEffect(() => {
    getRestaurantCategories();
  }, [getRestaurantCategories]);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.sidebarTitle}>
          <FormattedMessage
            id="leftOver.sidebar.Categories"
            defaultMessage="Categories"
          />
        </div>
        <List className={classes.list}>
          {categorise.map(({ id, name, count }, index) => (
            <ListItem
              className={classes.listItem}
              button
              component={NavLink}
              to={`/leftover/${id}`}
              exact={true}
              activeClassName="active"
              key={index}
            >
              <div className={classes.listItemContent}>
                <div className={classes.listItemName}>{name}</div>
                <div className={classes.listItemCount}>{count}</div>
              </div>
            </ListItem>
          ))}
        </List>
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
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
