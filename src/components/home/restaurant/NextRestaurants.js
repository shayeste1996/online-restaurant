import React, { Suspense, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRestaurants } from "store/restaurant";

import Utils from "../../../assert/Utils";
import Loading from "../../../assert/Loading";

const Restaurant = React.lazy(() => import("./Restaurant"));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    background: "white",
  },
  title: {
    margin: "16px 0 24px",
    fontSize: "28px",
    fontWeight: "bold",
  },
  more: {
    color: "#000000",
    background: "rgb(255, 224, 51)",
    fontWeight: "bold",
    textAlign: "center",
    padding: "12px 0px",
    cursor: "pointer",
    borderRadius: 4,
    fontSize: 16,
  },
}));

const title = (
  <FormattedMessage
    id="home.nextRestaurants.NearYou"
    defaultMessage="Near you"
  />
);
const moreText = (
  <FormattedMessage
    id="home.nextRestaurants.ShowMore"
    defaultMessage="Show more"
  />
);

const showCount = 3;

const getFilteredArray = (entities, searchText) => {
  const arr = Object.keys(entities).map((id) => entities[id]);
  if (searchText.length === 0) {
    return arr;
  }
  return Utils.filterArrayByString(arr, searchText);
};

const NextRestaurants = ({ getRestaurants, restaurants, searchText }) => {
  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  const classes = useStyles();

  const [more, setMore] = useState(false);

  const moreClick = () => setMore(true);

  const filteredRestaurant = getFilteredArray(restaurants, searchText);

  const newRestaurants = more
    ? filteredRestaurant
    : filteredRestaurant.slice(0, showCount);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <div className="flex flex-row flex-wrap">
        <Suspense fallback={<Loading />}>
          {newRestaurants.map((item, index) => (
            <Restaurant restaurant={item} key={index} />
          ))}
        </Suspense>
      </div>
      {restaurants.length > showCount && (
        <div className={classes.more} onClick={moreClick}>
          {moreText}
        </div>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(NextRestaurants);
