import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core";

import Loading from "../../assert/Loading";

const Sidebar = React.lazy(() => import("./sidebar/Sidebar"));
const Content = React.lazy(() => import("./content/Content"));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& .sidebarWrapper": {
      width: "100%",
      padding: "0px",
      margin: "12px 0px",
      "& .mapWrapper": {
        border: "none",
      },
    },
    "& .contentWrapper": {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      margin: "8px 0px",
      "& .sidebarWrapper": {
        width: "350px",
        padding: "0px 12px",
        margin: "0px",
      },
      "& .contentWrapper": {
        maxWidth: "calc(100% - 350px)",
      },
    },
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Suspense fallback={<Loading />}>
        <Content className="contentWrapper" />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Sidebar className="sidebarWrapper" />
      </Suspense>
    </div>
  );
};
export default Profile;
