import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  yellowBtn: {
    background: "rgb(255, 224, 51)",
    width: "35%",
    cursor: "pointer",
    border: "none",
    height: "34px",
    fontSize: "15px",
    borderRadius: " 0 3px 3px 0",
    verticalAlign: "top",
    fontWeight: "bold",
  },
  phoneField: {
    width: "65%",
    height: "34px",
    fontSize: "15px",
    border: "1px solid #cccccc",
    boxShadow: "inset 1px 1px 4px 0 rgba(0, 0, 0, 0.15)",
    borderRight: "none",
    borderRadius: "3px 0 0 3px",
  },
  phoneInput: {
    boxShadow: "none",
    background: "transparent",
    lineHeight: "32px",
  },
  phoneCode: {
    left: "2.8rem",
    right: 0,
    display: "flex",
    position: "absolute",
    alignItems: "center",
    pointerEvents: "none",
    lineHeight: "32px",
  },
}));

const LoginConfirmPhone = ({intl}) => {
  const classes = useStyles();
  const [number, setNumber] = useState("");
  const isNumericInput = (event) => {
    const key = event.keyCode;
    return (
      (key >= 48 && key <= 57) || // Allow number line
      (key >= 96 && key <= 105) // Allow number pad
    );
  };

  const isModifierKey = (event) => {
    const key = event.keyCode;
    return (
      event.shiftKey === true ||
      key === 35 ||
      key === 36 || // Allow Shift, Home, End
      key === 8 ||
      key === 9 ||
      key === 13 ||
      key === 46 || // Allow Backspace, Tab, Enter, Delete
      (key > 36 && key < 41) || // Allow left, up, right, down
      // Allow Ctrl/Command + A,C,V,X,Z
      ((event.ctrlKey === true || event.metaKey === true) &&
        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
    );
  };

  const telHandler = (event) => {
    const target = event.target;
    const input = target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only

    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const beforeLast = input.substring(6, 8);
    const last = input.substring(8, 10);

    let inputValue = "";
    if (input.length > 8) {
      inputValue = `(${zip}) ${middle}-${beforeLast}-${last}`;
    } else if (input.length > 6) {
      inputValue = `(${zip}) ${middle}-${beforeLast}`;
    } else if (input.length > 3) {
      inputValue = `(${zip}) ${middle}`;
    } else if (input.length > 0) {
      inputValue = `(${zip}`;
    }

    setNumber(inputValue);
  };

  const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if (!isNumericInput(event) && !isModifierKey(event)) {
      event.preventDefault();
    }
  };
  return (
    <div className="mt-5">
      <div
        className={classNames(
          classes.phoneField,
          "inline-flex items-center pl-6 font-bold"
        )}
      >
        <input
          onKeyDown={enforceFormat}
          type="tel"
          value={number}
          onChange={(e) => telHandler(e)}
          placeholder={intl.formatMessage({
            id: "home.loginConfirmPhone.PhoneNum",
            defaultMessage: "Phone number",
          })}
          className={classNames(
            classes.phoneInput,
            "text-md inline-block h-full w-full border-none"
          )}
        />
        <div className={classes.phoneCode}>+7</div>
      </div>
      <button
        className={classNames(
          classes.yellowBtn,
          "leading-tight px-2 h-full rounded rounded-r-none text-md cursor-not-allowed opacity-50"
        )}
      >
        <FormattedMessage
          id="home.loginConfirmPhone.GetCode"
          defaultMessage="To get the code"
        />
      </button>
    </div>
  );
};

export default injectIntl(LoginConfirmPhone);
