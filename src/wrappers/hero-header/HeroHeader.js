import React from "react";
import { Icon } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { openDialog } from "store/dialog";
import { locationChange } from "store/location";

import LocationModal from "components/location/LocationModal";
import GoogleAutocomplete from "components/location/GoogleAutocomplete";

const HeroHeader = ({ openDialog, locationChange, location, intl }) => {
  const address = location ? location.description : "";
  const search = {
    button: (
      <FormattedMessage
        id="home.hero.ShowRestaurants"
        defaultMessage="Show Restaurants"
      />
    ),
    input: intl.formatMessage({
      id: "home.hero.ShippingAddress",
      defaultMessage: "Enter shipping address ...",
    }),
  };

  return (
    <div className="home__hero-header">
      <div className="home__hero-header--content">
        <ul className="home__hero-header--breadcrumbs">
          <li className="home__hero-header--breadcrumb-item">
            <Link to="/">
              <FormattedMessage
                id="home.hero.YandexEda"
                defaultMessage="Yandex.Food"
              />
            </Link>
          </li>
          <li className="home__hero-header--breadcrumb-item">
            <Link to="/moscow">
              <FormattedMessage
                id="home.hero.Moscow"
                defaultMessage="ُMoscow"
              />
            </Link>
          </li>
        </ul>
        <h1 className="home__hero-header--title">
          <FormattedMessage
            id="home.hero.FirstImage"
            defaultMessage="Fast food delivery"
          />
          <br />
          <FormattedMessage
            id="home.hero.SecondImage"
            defaultMessage="ُin Moscow"
          />
        </h1>
        <div className="home__hero-header--address">
          <div
            className="flex justify-between w-full text-3xl items-center
             rounded bg-white"
          >
            <Icon
              className="icon--location"
              onClick={() =>
                openDialog({
                  children: <LocationModal />,
                  maxWidth: "md",
                  fullWidth: true,
                  fullScreen: false,
                  scroll: "body",
                  classes: { paper: "m-0 md:m-48" },
                })
              }
            >
              my_location
            </Icon>
            <GoogleAutocomplete
              placeholder={search.input}
              locationChange={locationChange}
              location={address}
            />
            <button variant="contained" className="home__hero-header--btn">
              {search.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { location: state.location.current };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
      locationChange,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(HeroHeader));
