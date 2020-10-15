import React, { Suspense, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core";

import { shallowEqual, useSelector } from "react-redux";

import Loading from "../../assert/Loading";
import _ from "lodash";

const Location = React.lazy(() => import("./Location"));
const Cart = React.lazy(() => import("../cart/Cart"));

const useStyles = makeStyles(() => ({
  sidebarWrapper: {
    paddingBottom: "0px",
    position: "fixed",
    width: "260px",
    transform: "translateZ(0px)",
    marginTop: "90px",
    height: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
  },
  appCartWithButtonRoot: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
  },
}));

const RestaurantCategory = () => {
  const classes = useStyles();
  const { location } = useSelector(
    (state) => ({ location: state.location.current }),
    shallowEqual
  );

  const onScroll = useCallback(() => {
    const Sidebar = document.getElementById("Sidebar");
    const footer = document.getElementById("Footer");
    const Restaurant = document.getElementById("Restaurant");

    const top = 20;
    const realScrollOffset =
      window.pageYOffset + Restaurant.offsetTop + Sidebar.clientHeight;

    if (realScrollOffset > footer.offsetTop)
      Sidebar.style.top = top - (realScrollOffset - footer.offsetTop) + "px";
    else Sidebar.style.top = top + "px";
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    const onResize = () => {
      const sidebar = document.getElementById("Sidebar");
      const hero = document.getElementById("RestaurantHero");
      if (hero) {
        const position = hero.offsetLeft + hero.offsetWidth + 10;
        sidebar.style.left = position + "px";
      }
    };

    const onScrollThrottled = _.throttle(onResize, 100);
    onResize();
    window.addEventListener("resize", onScrollThrottled);
    return () => {
      window.removeEventListener("resize", onScrollThrottled);
    };
  }, []);

  return (
    <div className={classes.sidebarWrapper} id="Sidebar">
      <div className={classes.appCartWithButtonRoot}>
        <Suspense fallback={<Loading />}>
          {location === null ? <Location /> : <Cart />}
        </Suspense>
      </div>
    </div>
  );
};

export default RestaurantCategory;
