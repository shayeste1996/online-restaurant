import React, { useEffect, useState, Fragment } from "react";
import { Icon } from "@material-ui/core";

import LocationModal from "components/location/LocationModal";
import { FormattedMessage } from "react-intl";

import Login from "components/login/Login";
import CityList from "components/header/CityList";
import ProfileItems from "components/header/ProfileItems";

const HeaderButtons = ({
  openDialog,
  closeDialog,
  cities,
  getCities,
  city,
  openPopover,
  location,
}) => {
  const [changeBtn, setChangeBtn] = useState(false);
  useEffect(() => {
    getCities();
  }, [getCities]);

  const toggleButton = () => {
    setChangeBtn(!changeBtn);
    openDialog({
      children: <LocationModal />,
      maxWidth: "md",
      fullWidth: true,
      fullScreen: false,
      scroll: "body",
      classes: { paper: "m-0 md:m-48" },
    });
  };
  const login = <FormattedMessage id="header.Login" defaultMessage="Login" />;
  const profile = (
    <FormattedMessage id="header.Profile" defaultMessage="Profile" />
  );
  const curenctCity = city ? city.name : cities.length ? cities[0].name : "";

  const cityClick = (event) => {
    openPopover(event.currentTarget, {
      children: <CityList />,
      classes: { paper: "w-64 h-auto" },
    });
  };
  const profileClick = (event) => {
    openPopover(event.currentTarget, {
      children: <ProfileItems openDialog={openDialog} />,
      classes: { paper: "w-64 h-auto header__popup" },
    });
  };
  const LoginClick = () => {
    openDialog({
      children: <Login closeDialog={closeDialog} />,
      maxWidth: "xs",
      fullWidth: true,
      fullScreen: false,
      scroll: "body",
      classes: { paper: "m-0 md:m-48" },
    });
  };

  return (
    <Fragment>
      {location && (
        <>
          <button
            className={`btn--bordered btn--truncated ${
              changeBtn ? "btn--has-cart" : null
            }`}
            onClick={toggleButton}
          >
            <Icon color="inherit" className="header__icon--location">
              near_me
            </Icon>
            {location.description}
          </button>
          <button
            className={`btn--bordered btn--truncated ${
              changeBtn ? "btn--has-address" : "hidden"
            }`}
          >
            <Icon color="inherit" className="header__icon--shop">
              local_grocery_store
            </Icon>
          </button>
        </>
      )}
      <button className="btn--bordered" onClick={cityClick}>
        {curenctCity}
      </button>
      <button className="btn--bordered" onClick={LoginClick}>
        {login}
      </button>
      <button className="btn--bordered" onClick={profileClick}>
        {profile}
      </button>
    </Fragment>
  );
};

export default HeaderButtons;
