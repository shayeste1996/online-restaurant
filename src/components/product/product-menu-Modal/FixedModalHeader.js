import React from "react";
import { makeStyles, IconButton, Icon, DialogTitle } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(2),
    color: theme.palette.grey[500],
    padding: "13px",
    marginTop:"10px"
  },
}));

const FixedModalHeader = ({ closeDialog, title }) => {
  const classes = useStyles();

  return (
    <>
      <DialogTitle id="scroll-dialog-title">
        <div className="text-2xl font-bold py-2">{title}</div>
      </DialogTitle>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={closeDialog}
      >
        <Icon className="text-lg text-black">close</Icon>
      </IconButton>
    </>
  );
};

export default FixedModalHeader;
