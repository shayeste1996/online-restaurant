import React from "react";
import { List, ListItem, Icon } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import UserInfo from "components/user/user-information/UserInfo";
import UserOrder from "components/user/user-order/UserOrder";
import UserAddress from "components/user/user-address/UserAddress";

const Item = (props) => (
  <div className="flex">
    <Icon>{props.icon}</Icon>
    <div className="mt-1 ml-2">{props.title}</div>
  </div>
);
const title = {
  myInfo: (
    <FormattedMessage id="header.myInfo" defaultMessage="My Information" />
  ),
  myAddresses: (
    <FormattedMessage id="header.myAddresses" defaultMessage="My Addresses" />
  ),
  myOrders: (
    <FormattedMessage id="header.myOrders" defaultMessage="My Orders" />
  ),
  logOut: <FormattedMessage id="header.logOut" defaultMessage="Log Out" />,
};
const ProfileItems = ({ openDialog }) => {
  return (
    <List>
      <ListItem
        className="header__popup--items"
        onClick={() =>
          openDialog({
            children: <UserInfo />,
            maxWidth: "sm",
            fullWidth: true,
            fullScreen: false,
            scroll: "body",
            classes: { paper: "m-0 md:m-48" },
          })
        }
      >
        <Item icon="person_outline" title={title.myInfo} />
      </ListItem>
      <ListItem
        className="header__popup--items"
        onClick={() =>
          openDialog({
            children: <UserAddress />,
            maxWidth: "sm",
            fullWidth: true,
            fullScreen: false,
            scroll: "body",
            classes: { paper: "m-0 md:m-48" },
          })
        }
      >
        <Item icon="location_on" title={title.myAddresses} />
      </ListItem>
      <ListItem
        className="header__popup--items"
        onClick={() =>
          openDialog({
            children: <UserOrder />,
            maxWidth: "md",
            fullWidth: true,
            fullScreen: false,
            scroll: "paper",
            classes: { paper: "m-72" },
          })
        }
      >
        <Item icon="check" title={title.myOrders} />
      </ListItem>
      <ListItem
        className="header__popup--items"
        onClick={() =>
          openDialog({
            children: <UserOrder />,
            maxWidth: "md",
            fullWidth: true,
            fullScreen: false,
            scroll: "paper",
            classes: { paper: "m-72" },
          })
        }
      >
        <Item icon="exit_to_app" title={title.logOut} />
      </ListItem>
    </List>
  );
};

export default ProfileItems;
