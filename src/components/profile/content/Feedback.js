import React from "react";
import { makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { FormattedMessage } from "react-intl";

import Card from "../Card";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "32px",
    "& .header > div > span": {
      color: "#63b3ed",
    },
    "& .content": {
      "& .item": {
        color: "#7b7a8c",
        borderBottom: "1px solid #ccc",
        padding: "20px 0px",
        marginTop: "8px",
        "& .title": {
          fontSize: "18px",
        },
        "& .date": {
          color: "#555",
          margin: "10px 0px",
        },
        "& .rate": {},
        "& .comment": {
          marginTop: "12px",
        },
      },
    },
  },
}));

const comment =
  "Excellent tutor who is willing to help you understand things by explaining complicated theories in a multitude of ways. Very kind and hospitable which makes learning easier.";
const comments = [
  { id: "1", name: "Fatima (Mrs)", date: "14/04/2019", comment, rate: 4 },
  { id: "2", name: "Kevin  (Mr)", date: "30/07/2018", comment, rate: 3 },
  { id: "3", name: "Mohammed (Mr)", date: "23/06/2018", comment, rate: 5 },
  { id: "4", name: "hiba  (Miss)", date: "05", comment, rate: 4 },
];

const Feedback = () => {
  const classes = useStyles();

  const Header = () => (
    <div>
      <FormattedMessage
        id="profile.feedBack.FeedBackForRestaurant"
        defaultMessage="Feedback For Restaurant"
      />
      (<span>9</span>)
    </div>
  );

  const Content = () => (
    <div>
      {comments.map(({ name, date, rate, comment }, index) => (
        <div className="item" key={index}>
          <div className="title">{name}</div>
          <div className="date">{date}</div>
          <Rating className="rate" value={rate} readOnly />
          <div className="comment">{comment}</div>
        </div>
      ))}
    </div>
  );

  return <Card Header={Header} Content={Content} className={classes.root} />;
};

export default Feedback;
