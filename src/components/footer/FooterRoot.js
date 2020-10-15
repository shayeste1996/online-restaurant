import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import FooterTopLine from "./FooterTopLine/FooterTopLine";
import FooterMenus from "./FooterMenus/FooterMenus";
import FooterBottomLine from "./FooterBottomLine/FooterBottomLine";
import MobileFooterRoot from "./MobileFooter/MobileFooterRoot";

const footerList1 = [
  [
    { text: "Астрахань", link: "#link1" },
    { text: "Санкт-Петербург", link: "#link2" },
    { text: "Алматы", link: "#link3" },
    { text: "Барнаул", link: "#link4" },
    { text: "Санкт-Петербург", link: "#link5" },
  ],
  [
    { text: "Гастросет", link: "#link1" },
    { text: "Green Market", link: "#link2" },
    { text: "strEAT", link: "#link3" },
    { text: "Ангара", link: "#link4" },
    { text: "Вокруг Света", link: "#link5" },
  ],
  [
    { text: "Гастросет", link: "#link1" },
    { text: "Green Market", link: "#link2" },
    { text: "strEAT", link: "#link3" },
    { text: "Ангара", link: "#link4" },
    { text: "Вокруг Света", link: "#link5" },
  ],
  [
    { text: "Гастросет", link: "#link1" },
    { text: "Green Market", link: "#link2" },
    { text: "strEAT", link: "#link3" },
    { text: "Ангара", link: "#link4" },
    { text: "Вокруг Света", link: "#link5" },
  ],
  [
    { text: "Гастросет", link: "#link1" },
    { text: "Green Market", link: "#link2" },
    { text: "strEAT", link: "#link3" },
    { text: "Ангара", link: "#link4" },
    { text: "Вокруг Света", link: "#link5" },
  ],
];
const footerList2 = [
  [
    { text: "Гастросет", link: "#link1" },
    { text: "Green Market", link: "#link2" },
    { text: "strEAT", link: "#link3" },
    { text: "Ангара", link: "#link4" },
    { text: "Вокруг Света", link: "#link5" },
  ],
  [
    { text: "Гастросет", link: "#link1" },
    { text: "Green Market", link: "#link2" },
    { text: "strEAT", link: "#link3" },
    { text: "Ангара", link: "#link4" },
    { text: "Вокруг Света", link: "#link5" },
  ],
  [
    { text: "Гастросет", link: "#link1" },
    { text: "Green Market", link: "#link2" },
    { text: "strEAT", link: "#link3" },
    { text: "Ангара", link: "#link4" },
    { text: "Вокруг Света", link: "#link5" },
  ],
  [
    { text: "Гастросет", link: "#link1" },
    { text: "Green Market", link: "#link2" },
    { text: "strEAT", link: "#link3" },
    { text: "Ангара", link: "#link4" },
    { text: "Вокруг Света", link: "#link5" },
  ],
  [
    { text: "Гастросет", link: "#link1" },
    { text: "Green Market", link: "#link2" },
    { text: "strEAT", link: "#link3" },
    { text: "Ангара", link: "#link4" },
    { text: "Вокруг Света", link: "#link5" },
  ],
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f9f9f9",
    paddingTop: "10px",
  },
}));

const dishes = (
  <FormattedMessage
    id="home.footerRoot.Dishes"
    defaultMessage="Dishes and cuisine"
  />
);
const regions = (
  <FormattedMessage id="home.footerRoot.Regions" defaultMessage="Regions" />
);

const FooterRoot = () => {
  const classes = useStyles();

  return (
    <footer className={classNames(classes.root)} id="Footer">
      <FooterTopLine />
      <Divider light />
      <FooterMenus />
      <MobileFooterRoot title={dishes} mobileList={footerList1} />
      <Divider light />
      <MobileFooterRoot title={regions} mobileList={footerList2} />
      <Divider light />
      <FooterBottomLine />
    </footer>
  );
};

export default FooterRoot;
