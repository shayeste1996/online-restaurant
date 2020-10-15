import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    height: "53px",
    border: "1px solid rgba(0,0,0,.05)",
    maxWidth: "335px",
    fontSize: "16px",
    boxShadow: "none",
    lineHeight: "16px",
    borderRadius: "12px 12px 0 0",
    letterSpacing: "1px",
  },
  input: {
    borderRadius: " 12px 12px 0 0",
    paddingLeft: "1.3rem",
  },
  code: {
    lineHeight: "32px",
    pointerEvents: "none",
  },
  btn: {
    borderRadius: "0 0 12px 12px",
    backgroundColor: " rgb(255, 224, 51)",
    maxWidth: " 335px",
  },
  disclaimer: {
    color: " #b0b0b0",
    fontSize: "12px",
  },
}));

const MobileLoginBody = () => {
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
    <div className="text-center p-8">
      <form>
        <div className="text-lg font-bold">
          <FormattedMessage
            id="home.login.EnterNum"
            defaultMessage="Please enter your phone number"
          />
        </div>
        <div
          className={classNames(
            "w-full inline-flex text-center my-0 mx-auto mt-8 relative",
            classes.inputContainer
          )}
        >
          <input
            onKeyDown={enforceFormat}
            type="tel"
            value={number}
            onChange={(e) => telHandler(e)}
            className={classNames("w-full h-full border-none text-center",
              classes.input
            )}
          />
          {number.length === 0 && (
            <div
              className={classNames(
                "flex justify-center items-center absolute h-full w-full",
                classes.code
              )}
            >
              +7
            </div>
          )}
        </div>
        <button
          className={classNames(
            "w-full block my-0 mx-auto p-5 font-bold text-md",
            classes.btn
          )}
        >
          <FormattedMessage
            id="home.loginConfirmSubmit.Next"
            defaultMessage="Next"
          />
        </button>
        <div className={classNames("mt-3", classes.disclaimer)}>
          <FormattedMessage
            id="home.loginConfirmSubmit.AcceptCondition"
            defaultMessage="By clicking the 'Next' button, you accept the conditions"
          />
          <br />
          <a className="underline" href="#link">
            <FormattedMessage
              id="home.loginConfirmSubmit.Agreement"
              defaultMessage="User agreement"
            />
          </a>
        </div>
      </form>
    </div>
  );
};

export default MobileLoginBody;
