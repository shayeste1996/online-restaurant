import React from "react";
import { makeStyles, IconButton, Icon } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "store/dialog";

import UserInfoInput from "./UserInfoInput";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    backgroundColor: "rgb(255, 224, 51)",
    borderRadius: "3px",
  },
  cancelBtn: {
    border: " 1px solid #f5f5f5",
    background: "#f5f5f5",
    borderRadius: "3px",
  },
}));

const UserInfo = ({ closeDialog }) => {
  const classes = useStyles();

  return (
    <div className="relative">
      <IconButton
        aria-label="close"
        className={classNames(classes.closeButton, "focus:outline-none")}
        onClick={closeDialog}
      >
        <Icon color="action">close</Icon>
      </IconButton>
      <div className="text-md py-12 px-10">
        <div className="text-left font-bold text-4xl">
          <h1>
            <FormattedMessage
              id="header.myInfo"
              defaultMessage="My Information"
            />
          </h1>
        </div>
        <UserInfoInput />
        <div className="flex flex-row my-5">
          <button
            className={classNames(
              classes.submitBtn,
              "text-center font-bold w-2/5 py-3 mt-5 text-base"
            )}
          >
            <FormattedMessage
              id="home.userInfo.SaveChanges"
              defaultMessage="Save Changes"
            />
          </button>
          <button
            className={classNames(
              classes.cancelBtn,
              "text-center w-1/3 py-3 mt-5 text-base ml-4"
            )}
          >
            <FormattedMessage
              id="home.mobileSearchInput.Cancel"
              defaultMessage="Cancel"
            />
          </button>
        </div>
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

export default connect(null, mapDispatchToProps)(UserInfo);
