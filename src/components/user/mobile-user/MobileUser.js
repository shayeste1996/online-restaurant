import React from "react";
import { makeStyles, Divider } from "@material-ui/core";

import MobileUserOrder from "./mobile-user-order/MobileUserOrder";
import MobileUserInfo from "./mobile-user-info/MobileUserInfo";
import MobileUserAddress from "components/mobile/address/MobileUserAddress";
import MobileUserLogout from "./mobile-user-logout/MobileUserLogout";

const useStyles = makeStyles((theme) => ({
  divid: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
}));

const MobileUser = () => {
  const classes = useStyles();

  return (
    <>
      <MobileUserOrder />
      <Divider className={classes.divid} />
      <MobileUserInfo />
      <Divider className={classes.divid} />
      <MobileUserAddress />
      <Divider className={classes.divid} />
      <MobileUserLogout />
    </>
  );
};

export default MobileUser;
