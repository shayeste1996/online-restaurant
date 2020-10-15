import React from "react";
import { Icon, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  pageRating: {
    backgroundColor: "#ffe033",
    display: " inline-flex",
    borderRadius: " 18px",
    padding: "4px 16px",
  },
  ratingIcon: {
    marginLeft: "-7px",
    marginRight: " 2px",
    width: "24px",
    height: "24px",
    backgroundSize: "100%",
    color: "white",
  },
}));

const HeroHeaderTop = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classNames(classes.pageRating)}>
        <Icon className={classes.ratingIcon}>star</Icon>
        <div className="text-lg font-semibold">4.9</div>
      </div>
      <ul className="mt-2 text-white text-xl">
        <li className="inline">
          <a href="#link">
            <span className="opacity-75">
              <FormattedMessage
                id="restaurant.heroHeaderTop.FoodDelivery"
                defaultMessage="Food delivery"
              />
              .
            </span>
          </a>
        </li>
        <li className="inline">
          <a href="#link">
            <span className="opacity-75">
              <FormattedMessage id="home.hero.Moscow" defaultMessage="Moscow" />
            </span>
          </a>
        </li>
      </ul>
      <h1 className="text-6xl text-white font-bold">
        <FormattedMessage
          id="restaurant.heroHeaderTop.YandexShop"
          defaultMessage="Yandex.Shop"
        />
      </h1>
    </>
  );
};

export default HeroHeaderTop;
