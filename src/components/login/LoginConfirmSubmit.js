import React from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "3px",
  },
}));

const licenseLink = "#link";

const LoginConfirmSubmit = () => {
  const classes = useStyles();

  return (
    <>
      <button
        className={classNames(
          classes.submitBtn,
          "text-center font-bold w-full p-2 mt-5 text-lg cursor-not-allowed opacity-50"
        )}
      >
        <FormattedMessage
          id="home.loginConfirmSubmit.Next"
          defaultMessage="Next"
        />
      </button>
      <div className="text-md font-semibold pt-3">
        <FormattedMessage
          id="home.loginConfirmSubmit.AcceptCondition"
          defaultMessage="By clicking the 'Next' button, you accept the conditions"
        />
        <br />
        <a className="underline" href={licenseLink}>
          <FormattedMessage
            id="home.loginConfirmSubmit.Agreement"
            defaultMessage="User agreement"
          />
        </a>
      </div>
    </>
  );
};

export default LoginConfirmSubmit;
