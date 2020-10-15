import React from "react";
import { makeStyles, Divider } from "@material-ui/core";

import MobileLoginHeader from "./MobileLoginHeader";
import MobileLoginBody from "./MobileLoginBody";

const useStyles = makeStyles((theme) => ({
  divid: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
}));

const MobileLogin = (props) => {
  const classes = useStyles();

  return (
    <>
      <MobileLoginHeader />
      <Divider className={classes.divid} />
      <MobileLoginBody />
    </>
  );
};
export default MobileLogin;
