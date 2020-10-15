import React from "react";
import { makeStyles, Icon, IconButton } from "@material-ui/core";
import classNames from "classnames";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "store/dialog";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    color: "black",
    width: 60,
    height: 60,
  },
  logo: {
    flex: " 1 0 auto",
    lineHeight: 0,
    paddingRight: "65px",
  },
  headerWidth: {
    width: "100%",
  },
}));

const logo = {
  src: "/static/images/header/logo.svg",
  alt: "logo",
};

const MobileLoginHeader = ({ closeDialog }) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.headerWidth,
        "flex flex-row items-center justify-between bg-white"
      )}
    >
      <div className="inline-block">
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={closeDialog}
        >
          <Icon className="text-lg text-black">close</Icon>
        </IconButton>
      </div>
      <div className={classNames(classes.logo, "text-center pb-2")}>
        <img alt={logo.alt} src={logo.src} className="h-6 mx-auto" />
      </div>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog: Actions.closeDialog,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(MobileLoginHeader);
