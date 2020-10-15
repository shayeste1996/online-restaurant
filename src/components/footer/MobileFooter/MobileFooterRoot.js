import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: "0 0 100%",
    color: " #b0b0b0",
    fontSize: " 12px",
    marginBottom: "25px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  mainList: {
    flex: " 0 1 140px",
  },
  list: {
    color: " #6a6a6a",
    display: "block",
    fontSize: "12px",
    paddingBottom: "22px",
  },
}));
const MobileFooterRoot = ({ title, mobileList }) => {
  const classes = useStyles();

  return (
    <div className="flex flex-wrap mx-5 my-5 md:hidden">
      <div className={classes.title}>{title}</div>
      {mobileList.map((item, index) => (
        <div className={classes.mainList} key={index}>
          {item.map((list, index) => (
            <a href={list.link} key={index} className={classes.list}>
              {list.text}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobileFooterRoot;
