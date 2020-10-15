import React from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import InfoTextField from "./InfoTextField";
import ModalHeader from "../ModalHeader";

const useStyles = makeStyles((theme) => ({
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "8px",
  },
  borderBottom: {
    borderBottom: " 1px solid #e0e0e0",
  },
  label: {
    color: " #b0b0b0",
    top: "-18px",
  },
  input: {
    flex: "1 1 auto",
  },
}));
const InfoModal = () => {
  const classes = useStyles();

  return (
    <>
      <ModalHeader
        title={
          <FormattedMessage
            id="header.myInfo"
            defaultMessage="My Information"
          />
        }
      />
      <div className="m-4">
        <div className="mt-16">
          <div className={classNames(classes.container, "flex")}>
            <InfoTextField />
          </div>
        </div>
        <button
          className={classNames(
            classes.submitBtn,
            "text-center w-full px-2 py-5 mt-5 text-base"
          )}
        >
          <FormattedMessage
            id="home.userInfo.SaveChanges"
            defaultMessage="Save changes"
          />
        </button>
      </div>
    </>
  );
};

export default InfoModal;
