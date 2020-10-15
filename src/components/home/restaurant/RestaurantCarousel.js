import React, { Suspense, useEffect } from "react";
import { makeStyles, IconButton, Icon } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRestaurants } from "store/restaurant";

const Restaurant = React.lazy(() => import("./Restaurant"));

const loading = () => (
  <div className="animated fadeIn pt-1 text-center">Loading...</div>
);

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "8px solid #fafafa",
  },
  scroll: {
    borderRadius: "8px",
    scrollBehavior: "smooth",
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
      scrollSnapType: "x mandatory",
      display: "flex",
      WebkitOverflowScrolling: "touch",
      position: "relative",
      zIndex: "1",
    },
  },
  title: {
    margin: "16px 0 24px",
    fontSize: "28px",
    fontWeight: "bold",
  },
  leftArrow: {
    position: "absolute",
    top: "calc(50% - 65px)",
    left: -60,
    zIndex: 1,
  },
  rightArrow: {
    position: "absolute",
    top: "calc(50% - 65px)",
    right: -60,
    zIndex: 1,
  },
  sliderWrapper: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      overflowX: "hidden",
    },
  },
}));

const title = (
  <FormattedMessage
    id="home.restaurantCarousel.NewItems"
    defaultMessage="New items of the week"
  />
);

const RestaurantCarousel = ({ getRestaurants, restaurants }) => {
  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  const classes = useStyles();

  const next = () => {
    const slider = document.querySelector(`#carouselId`);
    slider.scrollLeft = slider.scrollLeft + slider.clientWidth;
  };
  const before = () => {
    const slider = document.querySelector(`#carouselId`);
    slider.scrollLeft = slider.scrollLeft - slider.clientWidth;
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.sliderWrapper}>
        <div>
          <div className={classes.leftArrow}>
            <IconButton onClick={before}>
              <Icon fontSize="large">keyboard_arrow_left</Icon>
            </IconButton>
          </div>
          <div className={classes.rightArrow}>
            <IconButton onClick={next}>
              <Icon fontSize="large">keyboard_arrow_right</Icon>
            </IconButton>
          </div>
          <div
            className={classNames(
              "flex flex-row flex-no-wrap overflow-hidden",
              classes.scroll
            )}
            id="carouselId"
          >
            <Suspense fallback={loading()}>
              {restaurants.map((item, index) => (
                <Restaurant restaurant={item} key={index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurant.restaurants,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getRestaurants,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCarousel);
