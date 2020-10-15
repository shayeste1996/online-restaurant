import React from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { injectIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  codeInput: {
    height: " 34px",
    border: "1px solid #cccccc",
    boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
  },
}));

const LoginConfirmCode = ({intl}) => {
  const classes = useStyles();

  return (
    <div className="mt-5">
      <input
        className={classNames(classes.codeInput, "text-md px-3 py-1 w-full")}
        placeholder={intl.formatMessage({
          id: "home.loginConfirmCode.SmsCode",
          defaultMessage: "SMS code",
        })}
      />
    </div>
  );
};

export default injectIntl(LoginConfirmCode);
