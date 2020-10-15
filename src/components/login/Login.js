import React from "react";
import { makeStyles, IconButton, Icon } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import LoginConfirmPhone from "./LoginConfirmPhone";
import LoginConfirmCode from "./LoginConfirmCode";
import LoginConfirmSubmit from "./LoginConfirmSubmit";

const logo = {
  src: "/static/images/header/logo.svg",
  alt: "logo",
};

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const Login = ({ closeDialog }) => {
  const classes = useStyles();

  return (
    <div className="relative">
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={closeDialog}
      >
        <Icon color="action">close</Icon>
      </IconButton>
      <div className="text-md py-5 px-10">
        <div className="text-center pb-2">
          <img alt={logo.alt} src={logo.src} className="h-12 mx-auto" />
        </div>
        <div>
          <div className="text-lg font-bold text-center w-1/2 flex justify-center mx-auto">
            <FormattedMessage
              id="home.login.EnterNum"
              defaultMessage="Please enter your phone number"
            />
          </div>
          <LoginConfirmPhone />
          <LoginConfirmCode />
          <LoginConfirmSubmit />
        </div>
      </div>
    </div>
  );
};


export default Login;
