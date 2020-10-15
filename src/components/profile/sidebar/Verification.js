import React from "react";
import { makeStyles, Icon } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { FormattedMessage } from "react-intl";

import Card from "../Card";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "32px",
    width: "100%",
    "& .content > div": {
      color: "#7e7d8f",
    },
  },
}));

const Verification = () => {
  const classes = useStyles();

  const Header = () => (
    <FormattedMessage
      id="profile.verification.VerificationStatus"
      defaultMessage="Verification status"
    />
  );

  const Content = () => (
    <div>
      <div className="flex items-center ">
        <Icon fontSize="large" className="ml-2 mr-4 text-green-400">
          verified_user
        </Icon>
        <div>
          <FormattedMessage
            id="profile.verification.VerifiedId"
            defaultMessage="Restaurant ID Verified"
          />
        </div>
      </div>
      <div className="flex items-center my-6">
        <Icon fontSize="large" className="ml-2 mr-4 text-green-400">
          beenhere
        </Icon>
        <div>
          <FormattedMessage
            id="profile.verification.VerifiedDBS"
            defaultMessage="Enhanced DBS Verified"
          />
        </div>
      </div>
      <div className="font-bold my-6">
        <FormattedMessage
          id="profile.verification.RateRestaurant"
          defaultMessage="How references rated Restaurant"
        />
      </div>
      <div className="flex items-center my-4">
        <Rating className="rate" value={5} readOnly />
        <span className="ml-4">
          <FormattedMessage
            id="profile.verification.Professionalism"
            defaultMessage="Professionalism"
          />
        </span>
      </div>
      <div className="flex items-center my-4">
        <Rating className="rate" value={5} readOnly />
        <span className="ml-4">
          <FormattedMessage
            id="profile.verification.Reliability"
            defaultMessage="Reliability"
          />
        </span>
      </div>
      <div className="flex items-center ">
        <Rating className="rate" value={5} readOnly />
        <span className="ml-4">
          <FormattedMessage
            id="profile.verification.Trustworthy"
            defaultMessage="Trustworthy"
          />
        </span>
      </div>
    </div>
  );

  return <Card Header={Header} Content={Content} className={classes.root} />;
};
export default Verification;
