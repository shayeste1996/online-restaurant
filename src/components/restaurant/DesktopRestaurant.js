import React, { Suspense, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRestaurantProductCategories } from "store/restaurant";

import Loading from "assert/Loading";

const Hero = React.lazy(() => import("./heroHeader/HeroHeader"));
const Category = React.lazy(() => import("./RestaurantCategory"));
const RestaurantContent = React.lazy(() => import("./RestaurantContent"));
const CartWrapper = React.lazy(() => import("components/cart/CartWrapper"));

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    flex: "1 1 100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  sidebarRoot: {},
  contentInner: {
    flexGrow: "1",
    flexBasis: "100%",
    flexShrink: "0",
  },
}));

const DesktopRestaurant = ({ getRestaurantData }) => {
  const classes = useStyles();

  useEffect(() => {
    getRestaurantData();
  }, [getRestaurantData]);

  return (
    <div className="flex">
      <div className={classes.contentWrapper}>
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <div className={classes.contentInner}>
          <Suspense fallback={<Loading />}>
            <Category className="category" />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <RestaurantContent className="categoryContent" />
          </Suspense>
        </div>
      </div>
      <div className={classes.sidebarRoot}>
        <Suspense fallback={<Loading />}>
          <CartWrapper />
        </Suspense>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getRestaurantData: getRestaurantProductCategories,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(DesktopRestaurant);
