import React, { Suspense } from "react";
import { makeStyles, Hidden } from "@material-ui/core";
import classNames from "classnames";

import Map from "./Map";
import Loading from "assert/Loading";

import MessageButton from "../MessageButton";

const Qualifications = React.lazy(() => import("./Qualifications"));
const Verification = React.lazy(() => import("./Verification"));

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Sidebar = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <Map className="mapWrapper" />
      <Hidden smDown>
        <MessageButton />
      </Hidden>
      <Suspense fallback={<Loading />}>
        <Qualifications />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Verification />
      </Suspense>
    </div>
  );
};

export default Sidebar;
