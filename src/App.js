import React,{useEffect} from "react";
import {
  createGenerateClassName,
  jssPreset,
  StylesProvider,
} from "@material-ui/core/styles";
import { create } from "jss";
import { Router } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider  } from "react-intl";
import { createBrowserHistory } from "history";
import rtl from "jss-rtl";

import messages from "./translate";
import useGoogleMap from "./assert/useGoogleMap";
import usePreLoader from "./assert/usePreLoader";
import Theme from "./assert/Theme";
import Layout from "./Layout";
import "assets/sass/main.scss"
const history = createBrowserHistory();

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, rtl()],
  insertionPoint: document.getElementById("jss-insertion-point"),
});

const generateClassName = createGenerateClassName();



const App = (props) => {
  const { current: { locale, direction }}=props
  useGoogleMap();
  usePreLoader();




  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router basename="/" history={history}>
          <Theme>
            <Layout />
          </Theme>
        </Router>
      </IntlProvider>
    </StylesProvider>
  );
};

const mapStateToProps = (state) => ({
  current: state.locale.current,
});

export default connect(mapStateToProps)(App);
