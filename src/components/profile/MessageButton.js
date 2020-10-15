import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openDialog } from "store/dialog";

import MessageDialog from "./MessageDialog";

const MessageButton = ({ className, openDialog }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const messageClick = () => {
    openDialog({
      children: <MessageDialog />,
      maxWidth: "md",
      fullWidth: true,
      scroll: "body",
      fullScreen: fullScreen,
    });
  };

  return (
    <div
      className={classNames(
        "flex items-center justify-center font-bold text-lg w-auto h-10 mt-6 px-4 bg-blue-400 text-white rounded cursor-pointer",
        className
      )}
      onClick={messageClick}
    >
      <FormattedMessage
        id="profile.messageButton.ContactRestaurant"
        defaultMessage="Contact This Restaurant"
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(MessageButton);
