import React from "react";
import { makeStyles } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import Card from "../Card";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "32px",
    "& .header": {
      "& > span": {
        borderBottom: "3px solid #63b3ed",
      },
    },
  },
}));

const AboutMe = ({ content }) => {
  const classes = useStyles();

  const Header = () => (
    <FormattedMessage id="contact.AboutMe" defaultMessage="About me" />
  );

  const Content = () => content;

  return <Card Header={Header} Content={Content} className={classes.root} />;
};
export default AboutMe;
