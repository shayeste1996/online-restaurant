import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

import { getRestaurants } from "store/restaurant";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "./Card";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1",
    "& .cartWrapper": {
      background: "white",
      border: "1px solid #f2f2f2",
      padding: "8px",
      marginTop: "8px",
      "&:first-child": {
        marginTop: "0px",
      },
    },
  },
}));

const Content = ({ className, getRestaurants, restaurants }) => {
  const classes = useStyles();

  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  return (
    <div className={classNames(classes.root, className)}>
      {restaurants.map((item, index) => (
        <Card item={item} key={index} className="cartWrapper" />
      ))}
      {restaurants.map((item, index) => (
        <Card item={item} key={index} className="cartWrapper" />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurant.restaurants,
  searchText: state.restaurant.searchText,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getRestaurants,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
