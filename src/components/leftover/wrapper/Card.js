import React from "react";
import { makeStyles, Icon } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    padding: "8px 0px",
    cursor: "pointer",
    "& .imageItem": {
      transition: "transform 0.1s linear",
      backgroundSize: "240px",
      backgroundImage: "url(/static/images/restaurants/fallback-pattern.svg)",
      backgroundColor: "#f5f5f5",
      backgroundPosition: "center",
    },
    "& .itemDescription": {
      color: "#b0b0b0",
      width: "100%",
      overflow: "hidden",
      fontSize: "15px",
      marginTop: "8px",
      lineHeight: "1.33",
      overflowWrap: "break-word",
    },
  },
  itemTitle: {
    position: "relative",
    overflow: "hidden",
    fontSize: "20px",
    lineHeight: "1.2",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  itemDetail: {
    padding: "7px 0 0",
    display: "flex",
    flexWrap: "nowrap",
    fontSize: "14px",
    alignItems: "center",
  },
  deliveryIcon: {
    width: "32px",
    height: "22px",
    display: "inline-block",
    backgroundSize: "100%",
    backgroundImage: "url(/static/images/icons/motor-bike-block.svg)",
    backgroundPosition: "center",
  },
  badgeItem: {
    padding: "0 10px",
    fontSize: "13px",
    background: "rgb(255, 224, 51)",
    lineHeight: "22px",
    marginRight: "10px",
    borderRadius: "99px",
  },
  priceItem: {
    minWidth: "50px",
    lineHeight: "22px",
    paddingLeft: "22px",
    backgroundSize: "20px 20px",
    backgroundImage: "url(/static/images/restaurants/wallet.svg",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundPositionY: "1px",
  },
  secondPriceItem: {
    color: "#b0b0b0",
  },
}));

const Card = ({ item: { name, description, imagesAdress }, className }) => {
  const classes = useStyles();

  return (
    <div className={classNames(className, classes.listItem)}>
      <div className="h-40 rounded w-1/3 mr-4 imageItem">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${imagesAdress})` }}
        ></div>
        <noscript>
          <img src={imagesAdress} alt={name} className="w-full h-full" />
        </noscript>
      </div>
      <div className="flex flex-col justify-around w-2/3 mr-4 mainItem">
        <div className={classes.itemTitle}>{name}</div>
        <div className={classes.itemDetail}>
          <div className="relative mr-2">
            <div className={classes.deliveryIcon}></div>
          </div>
          <div className={classes.badgeItem}>
            <FormattedMessage id="leftOver.card.New" defaultMessage="New" />
          </div>
          <div className={classes.priceItem}>
            <span className="text-black">₽₽</span>
            <span className={classes.secondPriceItem}>₽</span>
          </div>
        </div>
        <div className="itemDescription">{description}</div>
      </div>
      <div className="flex flex-col justify-around items-center w-1/3 bottomItem">
        <div className="starsWrapper">
          <Icon className="text-yellow-400">star</Icon>
          <Icon>star</Icon>
          <Icon>star</Icon>
          <Icon>star</Icon>
        </div>

        <Link
          to="/restaurant"
          className="restaurantBtn flex items-center justify-center font-bold w-40 h-10 bg-blue-400 text-white rounded cursor-pointer"
        >
          <Icon>restaurant_menu</Icon>
          <span className="ml-1 text-lg">
            <FormattedMessage
              id="leftOver.card.MenuList"
              defaultMessage="Menu list"
            />
          </span>
        </Link>
        <Link
          to="/profile"
          className="profileBtn flex items-center justify-center font-bold text-lg w-40 h-10 bg-green-300 text-white rounded cursor-pointer"
        >
          <span>
            <FormattedMessage
              id="leftOver.card.ViewProfile"
              defaultMessage="View profile"
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
