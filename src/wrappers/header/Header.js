import React, { Suspense, useEffect } from "react";
import { AppBar, Toolbar, Hidden, Box } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openDialog } from "store/dialog";
import { closeDialog } from "store/dialog";
import { getCities } from "store/city";
import { openPopover } from "store/popover";

import Loading from "assert/Loading";
import Currency from "components/header/top-header/Currency";
import Language from "components/header/top-header/Language";

import HeaderLogo from "components/header/HeaderLogo";
import HeaderButtons from "components/header/HeaderButtons";

import MobileHeader from "components/mobile/header/MobileHeader";

const links = [
  {
    name: (
      <FormattedMessage id="header.Restaurants" defaultMessage="Restaurants" />
    ),
    address: "/restaurant",
    id: 1,
  },
  {
    name: <FormattedMessage id="header.Couriers" defaultMessage="Leftovers" />,
    address: "/leftover",
    id: 2,
  },
  {
    name: <FormattedMessage id="header.Companies" defaultMessage="Profile" />,
    address: "/profile",
    id: 3,
  },
];

const Header = (props) => {
  const { openDialog, cities, getCities, city, openPopover ,closeDialog} = props;
console.log(city)
  return (
    <AppBar className="header" id="Header">
      <Suspense fallback={<Loading />}>
        <div className="top__header">
          <div className="top__header-container">
            <Currency />
            <Language />
          </div>
        </div>
      </Suspense>
      <Toolbar className="py-5 px-10">
        <Hidden mdUp>
          <MobileHeader />
        </Hidden>
        <Hidden smDown>
          <div className="mx-2 w-full text-base my-4">
            <div className="flex flex-row justify-between items-center">
              <Box>
                <HeaderLogo />
              </Box>
              <Box>
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.address}
                    target="_blank"
                    className="header__menu"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
              </Box>
              <Box>
                <HeaderButtons {...props} />
              </Box>
            </div>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  cities: state.city.cities,
  city: state.city.current,
  location: state.location.current,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
      closeDialog,
      getCities,
      openPopover,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
