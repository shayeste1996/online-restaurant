import React from "react";
import { makeStyles, Icon } from "@material-ui/core";
import classNames from "classnames";
import Rating from "@material-ui/lab/Rating";
import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";

import { FaceBook, Twitter, Telegram } from "assert/CustomIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    border: "1px solid #f2f2f2",
    padding: "8px !important",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      "& .imageItem": {
        flex: "1 0 100%",
      },
      "& .otherColumn": {
        flex: "1 1 50%",
        padding: "8px",
      },
    },
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
    "& .itemMoney": {
      marginTop: "8px",
      fontSize: "18px",
      color: "#75c18f",
      fontWeight: "bold",
    },
    "& .itemTags .tag": {
      background: "#e8e8e8",
      padding: "4px 8px",
      color: "#717070",
      borderRadius: "3px",
      marginRight: "8px",
    },
    "& .social": {
      //"display":"flex",
      display: "none",
      marginTop: "12px",
      paddingLeft: "8px",
      "& *": {
        marginRight: "20px",
        cursor: "pointer",
      },
      "& .facebook": {
        color: "#3b5998",
        borderRadius: "0.125rem",
      },
      "& .twitter": {
        color: "#00acee",
      },
      "& .instagram": {
        backgroundImage:
          "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOnVybCgjU1ZHSURfMl8pO30KCS5zdDJ7ZmlsbDojNjU0QzlGO30KPC9zdHlsZT48ZyBpZD0iRWRnZXMiLz48ZyBpZD0iU3ltYm9sIj48Zz48cmFkaWFsR3JhZGllbnQgY3g9IjU2LjM1MDEiIGN5PSIxOS4yMTc5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuOTk4NiAtNS4yMzM1OTZlLTAyIDQuNDQ4NTU2ZS0wMiAwLjg0ODggLTM2Ljk3NDIgNDQzLjgwMTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9IlNWR0lEXzFfIiByPSI3MTEuMzM1Ij48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRUQ1NzYiLz48c3RvcCBvZmZzZXQ9IjAuMjYzNCIgc3R5bGU9InN0b3AtY29sb3I6I0Y0NzEzMyIvPjxzdG9wIG9mZnNldD0iMC42MDkxIiBzdHlsZT0ic3RvcC1jb2xvcjojQkMzMDgxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNEM2M0QyIi8+PC9yYWRpYWxHcmFkaWVudD48cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTYuMSwyMy4yYy0xNi4yLDYuMy0yOS45LDE0LjctNDMuNiwyOC40QzM4LjgsNjUuMiwzMC40LDc5LDI0LjEsOTUuMWMtNi4xLDE1LjYtMTAuMiwzMy41LTExLjQsNTkuNyAgICBjLTEuMiwyNi4yLTEuNSwzNC42LTEuNSwxMDEuNHMwLjMsNzUuMiwxLjUsMTAxLjRjMS4yLDI2LjIsNS40LDQ0LjEsMTEuNCw1OS43YzYuMywxNi4yLDE0LjcsMjkuOSwyOC40LDQzLjYgICAgYzEzLjcsMTMuNywyNy40LDIyLjEsNDMuNiwyOC40YzE1LjYsNi4xLDMzLjUsMTAuMiw1OS43LDExLjRjMjYuMiwxLjIsMzQuNiwxLjUsMTAxLjQsMS41YzY2LjgsMCw3NS4yLTAuMywxMDEuNC0xLjUgICAgYzI2LjItMS4yLDQ0LjEtNS40LDU5LjctMTEuNGMxNi4yLTYuMywyOS45LTE0LjcsNDMuNi0yOC40YzEzLjctMTMuNywyMi4xLTI3LjQsMjguNC00My42YzYuMS0xNS42LDEwLjItMzMuNSwxMS40LTU5LjcgICAgYzEuMi0yNi4yLDEuNS0zNC42LDEuNS0xMDEuNHMtMC4zLTc1LjItMS41LTEwMS40Yy0xLjItMjYuMi01LjQtNDQuMS0xMS40LTU5LjdDNDg0LDc5LDQ3NS42LDY1LjIsNDYyLDUxLjYgICAgYy0xMy43LTEzLjctMjcuNC0yMi4xLTQzLjYtMjguNGMtMTUuNi02LjEtMzMuNS0xMC4yLTU5LjctMTEuNGMtMjYuMi0xLjItMzQuNi0xLjUtMTAxLjQtMS41cy03NS4yLDAuMy0xMDEuNCwxLjUgICAgQzEyOS42LDEyLjksMTExLjcsMTcuMSw5Ni4xLDIzLjJ6IE0zNTYuNiw1NmMyNCwxLjEsMzcsNS4xLDQ1LjcsOC41YzExLjUsNC41LDE5LjcsOS44LDI4LjMsMTguNGM4LjYsOC42LDEzLjksMTYuOCwxOC40LDI4LjMgICAgYzMuNCw4LjcsNy40LDIxLjcsOC41LDQ1LjdjMS4yLDI1LjksMS40LDMzLjcsMS40LDk5LjRzLTAuMyw3My41LTEuNCw5OS40Yy0xLjEsMjQtNS4xLDM3LTguNSw0NS43Yy00LjUsMTEuNS05LjgsMTkuNy0xOC40LDI4LjMgICAgYy04LjYsOC42LTE2LjgsMTMuOS0yOC4zLDE4LjRjLTguNywzLjQtMjEuNyw3LjQtNDUuNyw4LjVjLTI1LjksMS4yLTMzLjcsMS40LTk5LjQsMS40cy03My41LTAuMy05OS40LTEuNCAgICBjLTI0LTEuMS0zNy01LjEtNDUuNy04LjVjLTExLjUtNC41LTE5LjctOS44LTI4LjMtMTguNGMtOC42LTguNi0xMy45LTE2LjgtMTguNC0yOC4zYy0zLjQtOC43LTcuNC0yMS43LTguNS00NS43ICAgIGMtMS4yLTI1LjktMS40LTMzLjctMS40LTk5LjRzMC4zLTczLjUsMS40LTk5LjRjMS4xLTI0LDUuMS0zNyw4LjUtNDUuN2M0LjUtMTEuNSw5LjgtMTkuNywxOC40LTI4LjNjOC42LTguNiwxNi44LTEzLjksMjguMy0xOC40ICAgIGM4LjctMy40LDIxLjctNy40LDQ1LjctOC41YzI1LjktMS4yLDMzLjctMS40LDk5LjQtMS40UzMzMC43LDU0LjgsMzU2LjYsNTZ6Ii8+PHJhZGlhbEdyYWRpZW50IGN4PSIxNTQuMDczMiIgY3k9IjEzNC41NTAxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuOTk4NiAtNS4yMzM1OTZlLTAyIDQuNDQ4NTU2ZS0wMiAwLjg0ODggLTI0LjM2MTcgMjUzLjI5NDYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9IlNWR0lEXzJfIiByPSIzNjUuMjgwMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkVENTc2Ii8+PHN0b3Agb2Zmc2V0PSIwLjI2MzQiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDcxMzMiLz48c3RvcCBvZmZzZXQ9IjAuNjA5MSIgc3R5bGU9InN0b3AtY29sb3I6I0JDMzA4MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzRDNjNEMiIvPjwvcmFkaWFsR3JhZGllbnQ+PHBhdGggY2xhc3M9InN0MSIgZD0iTTEzMC45LDI1Ni4zYzAsNjkuOCw1Ni42LDEyNi4zLDEyNi4zLDEyNi4zczEyNi4zLTU2LjYsMTI2LjMtMTI2LjNTMzI3LDEzMCwyNTcuMiwxMzAgICAgUzEzMC45LDE4Ni41LDEzMC45LDI1Ni4zeiBNMzM5LjIsMjU2LjNjMCw0NS4zLTM2LjcsODItODIsODJzLTgyLTM2LjctODItODJjMC00NS4zLDM2LjctODIsODItODJTMzM5LjIsMjExLDMzOS4yLDI1Ni4zeiIvPjxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjM4OC42IiBjeT0iMTI1IiByPSIyOS41Ii8+PC9nPjwvZz48L3N2Zz4=)",
        backgroundRepeat: "no-repeat",
        width: "24px",
        height: "24px",
      },
      "& .telegram": {
        color: "#08C",
      },
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
    backgroundImage:
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDMyIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGRkUwMzMiIGQ9Ik00IDBoMTkuM2E0IDQgMCAwIDEgMy40NTcgMS45ODhsNC4wNzMgN2E0IDQgMCAwIDEgMCA0LjAyNGwtNC4wNzMgN0E0IDQgMCAwIDEgMjMuMyAyMkg0YTQgNCAwIDAgMS00LTRWNGE0IDQgMCAwIDEgNC00eiIvPjxnIHN0cm9rZT0iIzAwMCI+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEyLjg1NyAxMC4xNDNjMCAuNzYtMS4xNDMgMS40NTUtMS4xNDMgMi41NDcgMCAuNjIuNDk5LjgxIDEuMTQzLjgxSDE0YzEuMTI2IDAgNi4wOC00LjU0MiA1LjE0Mi02Ljk5Ii8+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjAuMTg5IDE0LjQxYTEuNzE0IDEuNzE0IDAgMSAxLTMuMTg5Ljg3NWMwLS4xODIuMTMyLS42MTcuMzMzLS43OTgiLz48cGF0aCBkPSJNMTcuMDE1IDUuMDA1YzIuNzc0LjAzNSA0LjgyNSA3LjQ4OSA0LjgyNSA5LjA4MSAwIC4yOTYtLjE4OC41NzQtLjU2My44MzUtLjY3Mi0uNjE0LS44NzMtLjUwOS0xLjE2Mi0uNTA5bS0zLjEuNjk0Yy0uMjgyLjQ2Mi0yLjgyNS4zOTMtMy4yNTIuMzk0bS0xLjA3Ny00Ljg5NWwtNC4yMzUtLjExOGEuNzM2LjczNiAwIDAgMS0uNzM3LS43MzZ2LS4xOTRjMC0uNDI1LjM5LTEuMTA2LjgxNC0xLjA4bDMuOTY5LjU1MWMuMzg4LjAyNS40NzcuMzguNDc3Ljc3IDAgLjQwNy4xMTkuODA3LS4yODguODA3eiIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTcuNTI1IDEzLjcyOWMtLjA5MS4wNS0uMjEyLjE0NC0uMzYuMjgyLS4xNi4xNjItLjI0OC4yNTQtLjI2My4yNzZhMS42OCAxLjY4IDAgMCAwLS4zMy45OTkgMS43MTQgMS43MTQgMCAxIDAgMy40MjggMCIvPjxwYXRoIGQ9Ik04LjI4NiAxMC4xNDNDOC4yODYgMTEuMjg2IDYgMTEuNzkgNiAxMy43OThjMCAwIC40MjguMjkyLjk0Ni41Mm0zLjA2Ni45NzdjLjUzOC4xMjUgMS4wNjcuMjA1IDEuNTQyLjIwNWgzLjIwNU0xNy4wNDMgNUgxNSIvPjwvZz48L2c+PC9zdmc+)",
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

const Specification = ({
  item: { name, description, imagesAdress },
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={classNames(className, classes.root)}>
      <div className={classNames("h-40 rounded md:w-1/3 md:mr-4", "imageItem")}>
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${imagesAdress})` }}
        ></div>
        <noscript>
          <img src={imagesAdress} alt={name} className="w-full h-full" />
        </noscript>
        <div className="social">
          <FaceBook className="facebook" />
          <Twitter className="twitter" />
          <div className="instagram" />
          <Telegram className="telegram" />
        </div>
      </div>

      <div className="otherColumn flex flex-col md:w-2/3 md:mr-4">
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
        <div className="itemMoney">$125</div>
        <div className="itemTags flex mt-2">
          <div className="tag">Chicken</div>
          <div className="tag">Fish</div>
          <div className="tag">Shrimp</div>
        </div>
      </div>

      <div className="otherColumn flex flex-col justify-around items-start md:w-1/3">
        <div className="">
          <Rating className="rate" value={3} readOnly />
        </div>
        <div className="my-4">
          <div>
            <FormattedMessage
              id="home.userInfoInput.Email"
              defaultMessage="Email"
            />
            : Mohammadcj003@gmail.com
          </div>
          <div className="mt-2">
            <FormattedMessage
              id="home.userInfoInput.Phone"
              defaultMessage="Phone"
            />
            : : 09188390225
          </div>
          <div className="mt-2">
            <FormattedMessage id="header.Address" defaultMessage="Address" />
            1: Kermasnhah
          </div>
          <div className="mt-2">
            <FormattedMessage id="header.Address" defaultMessage="Address" />:
            Nobahar
          </div>
          <div className="mt-2">
            <FormattedMessage
              id="profile.specification.Nationality"
              defaultMessage="Nationality"
            />
            : : Iranian
          </div>
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
      </div>
    </div>
  );
};

export default Specification;
