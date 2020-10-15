import React, { useState } from "react";
import { makeStyles, Icon } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { setSearchText } from "store/leftover";
import { openPopover } from "store/popover";
import { openMenu } from "store/menu";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TimeList from "components/widgets/TimeList";
import Sort from "./Sort";
import Pagination from '@material-ui/lab/Pagination';

const yellow = "rgb(255, 224, 51)";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#f2f2f2",
  },
  sortButton: {
    marginRight: 80,
    color: "#000000",
    padding: "12px 16px",
    maxWidth: "150px",
    fontSize: "15px",
    lineHeight: "1.2",
    borderRadius: "28px",
    backgroundColor: "#fff",
    transitionDuration: "200ms",
    transitionProperty: "background-color, color",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  timeBox: {
    color: "gray",
    border: "1px solid #eee",
    padding: "0 5px",
    position: "relative",
    background: "#fff",
    borderRadius: 3,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: 16,
    minWidth: 300,
  },
  buttonsBox: {
    display: "flex",
    justifyContent: "center",
    color: "black",
    padding: 12,
    borderBottom: "1px solid #eeeeee",
  },
  rightButton: {
    borderRight: "none",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: "1px solid #e0e0e0",
    color: "black",
    padding: 8,
    outline: "none !important",
    "&:hover": {
      background: "transparent",
    },
  },
  leftButton: {
    borderLeft: "none",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: "1px solid #e0e0e0",
    color: "black",
    padding: 8,
    outline: "none !important",
    "&:hover": {
      background: "transparent",
    },
  },
  selectedButton: {
    cursor: "default",
    background: yellow,
    fontWeight: "bold",
    borderColor: yellow,
    "&:hover": {
      background: yellow,
    },
  },
  listItemText: {
    color: "black",
    fontWeight: "bold",
    "&:hover": {
      color: yellow,
    },
  },
  listItem: {
    "&:hover": {
      background: "transparent",
    },
  },
  itemSelected: {
    fontWeight: 900,
  },
}));

const sort = (
  <FormattedMessage id="home.category.Sort" defaultMessage="Sorting" />
);

const now = <FormattedMessage id="home.catalog.Now" defaultMessage="Now" />;
const delivery = (
  <FormattedMessage id="home.catalog.Delivery" defaultMessage="Delivery" />
);


const Catalog = ({ className, setSearchText, openMenu,openPopover, selectedItem }) => {
  const classes = useStyles();

  const timeClick = (event) => {
    openMenu(event.currentTarget, {
      children: <TimeList />,
      classes: { paper: "w-64 h-auto" },
    });
  };

  const sortClick = (event) => {
    openPopover(event.currentTarget, {
      children: <Sort />,
      classes: { paper: "w-64 h-auto" },
    });
  };
  // eslint-disable-next-line
  const [pageOfItems, setPageOfItems] = useState([]);

  return (
    <div className={classNames(classes.root, className)}>
      <Pagination count={10} className="flex-1" shape="rounded" showFirstButton showLastButton />
      <div className={classes.sortButton} onClick={sortClick}>
        <Icon className="mr-2">bar_chart</Icon>
        <span>{sort}</span>
      </div>
      <div className={classes.timeBox} onClick={timeClick}>
        <Icon className="mx-4">access_time</Icon>
        <div className="text-black">
          {delivery} :{selectedItem === null ? now : selectedItem}
        </div>
        <Icon className="mx-4">keyboard_arrow_down</Icon>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    time: state.timeList.time,
    selectedItem: state.menu.selectedItem,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSearchText,
      openPopover,
      openMenu
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);