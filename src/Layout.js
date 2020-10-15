import React, { Fragment, Suspense, memo } from "react";
import { makeStyles, Hidden } from "@material-ui/core/";
import { Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import Loading from "assert/Loading";
import BaseDialog from "assert/BaseDialog";
import BasePopover from "assert/BasePopover";
import BaseMenu from "assert/BaseMenu";
import Scrollbar from "assert/Scrollbar";

import Header from "wrappers/header/Header.js";
import Footer from "components/footer/FooterRoot";

const Pay = React.lazy(() => import("./components/pay/Pay"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Profile = React.lazy(() => import("./components/profile/Profile"));

//desktop mode
const Home = React.lazy(() => import("pages/Home"));
const Landing = React.lazy(() => import("./components/landing/Landing"));
const DesktopRestaurant = React.lazy(() =>
  import("./components/restaurant/DesktopRestaurant")
);
const Checkout = React.lazy(() => import("./components/checkout/Checkout"));
const Leftover = React.lazy(() => import("./components/leftover/Leftover"));

//mobile mode
const MobileHome = React.lazy(() =>
  import("./components/mobile/home/MobileHome")
);
const MobileLanding = React.lazy(() =>
  import("./components/mobile/landing/MobileLanding")
);
const MobileRestaurant = React.lazy(() =>
  import("./components/mobile/restaurant/MobileRestaurant")
);
const MobileRestaurantSearch = React.lazy(() =>
  import("./components/mobile/restaurant/MobileRestaurantSearch")
);
const MobileCart = React.lazy(() =>
  import("./components/mobile/cart/MobileCart")
);
const MobileCheckout = React.lazy(() =>
  import("./components/mobile/checkout/MobileCheckout")
);
const MobilePay = React.lazy(() => import("./components/mobile/pay/MobilePay"));
const MobileLeftover = React.lazy(() =>
  import("./components/mobile/leftover/MobileLeftover")
);

const useStyles = makeStyles(() => ({
  defaultLayout: {
    width: "100%",
    maxWidth: 1400,
    marginBottom: 8,
    margin: "12px auto",
  },
}));

const theme = {
  name: "Eda yandex",
  fullName: "Eda yandex",
};

const Root = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Helmet>
        <title>{theme.name}</title>
        <meta name="description" content={theme.fullName} />
      </Helmet>
      <Scrollbar>
        <Header />
 
        <Hidden smDown>
          <div className={classes.defaultLayout}>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route
                  path="/landing"
                  render={(props) => <Landing {...props} />}
                />
                <Route
                  path="/restaurant"
                  render={(props) => <DesktopRestaurant {...props} />}
                />
                <Route
                  path="/leftover"
                  render={(props) => <Leftover {...props} />}
                />
                <Route
                  path="/checkout"
                  render={(props) => <Checkout {...props} />}
                />
                <Route path="/pay" render={(props) => <Pay {...props} />} />
                <Route
                  path="/profile"
                  render={(props) => <Profile {...props} />}
                />
                <Route
                  path="/contact"
                  render={(props) => <Contact {...props} />}
                />
                <Route
                  path="/:city?/:category?"
                  render={(props) => <Home {...props} />}
                />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </div>
        </Hidden>

        <Hidden mdUp>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <MobileHome {...props} />}
              />
              <Route
                exact
                path="/landing"
                render={(props) => <MobileLanding {...props} />}
              />
              <Route
                path="/restaurant/search"
                render={(props) => <MobileRestaurantSearch {...props} />}
              />
              <Route
                path="/restaurant"
                render={(props) => <MobileRestaurant {...props} />}
              />
              <Route
                path="/profile"
                render={(props) => <Profile {...props} />}
              />
              <Route
                path="/cart"
                render={(props) => <MobileCart {...props} />}
              />
              <Route
                path="/checkout"
                render={(props) => <MobileCheckout {...props} />}
              />
              <Route path="/pay" render={(props) => <MobilePay {...props} />} />
              <Route
                path="/contact"
                render={(props) => <Contact {...props} />}
              />
              <Route
                path="/leftover"
                render={(props) => <MobileLeftover {...props} />}
              />
                {/* <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={routeProps => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                /> */}
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Hidden>

        <Footer /> 
      </Scrollbar>

      <BaseDialog />
      <BasePopover />
      <BaseMenu />
    </Fragment>
  );
};

export default memo(Root);
