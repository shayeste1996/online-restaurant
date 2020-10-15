import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core";
import { shallowEqual, useSelector } from "react-redux";

import Loading from "../../assert/Loading";

const Location = React.lazy(() => import("./CartLocation"));
const Cart = React.lazy(() => import("./Cart"));

const useStyles = makeStyles((theme) => ({
  sidebarWrapper: {
    paddingBottom: "0px",
    transform: "translateZ(0px)",
    height: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: "99px",
    zIndex: "2",
    width: "250px",
    marginRight: "8px",
    marginLeft: "8px",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  appCartWithButtonRoot: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
  },
}));

const CartWrapper = () => {
  const classes = useStyles();
  const { location } = useSelector(
    (state) => ({ location: state.location.current }),
    shallowEqual
  );

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

export default CartWrapper;
