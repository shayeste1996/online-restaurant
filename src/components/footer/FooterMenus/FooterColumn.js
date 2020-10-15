import React, { useState } from "react";
import { makeStyles, Icon } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import FooterColumnTitle from "./FooterColumnTitle";
import FooterColumnList from "./FooterColumnList";

const footerList1 = [
  { text: "Астрахань", link: "#link1" },
  { text: "Санкт-Петербург", link: "#link2" },
  { text: "Алматы", link: "#link3" },
  { text: "Барнаул", link: "#link4" },
  { text: "Санкт-Петербург", link: "#link5" },
  { text: "Гастросет", link: "#link1" },
  { text: "Green Market", link: "#link2" },
  { text: "strEAT", link: "#link3" },
  { text: "Ангара", link: "#link4" },
  { text: "Вокруг Света", link: "#link5" },
];
const footerList2 = [
  { text: "Гастросет", link: "#link1" },
  { text: "Green Market", link: "#link2" },
  { text: "strEAT", link: "#link3" },
  { text: "Ангара", link: "#link4" },
  { text: "Вокруг Света", link: "#link5" },
  { text: "Астрахань", link: "#link1" },
  { text: "Санкт-Петербург", link: "#link2" },
  { text: "Алматы", link: "#link3" },
  { text: "Барнаул", link: "#link4" },
  { text: "Санкт-Петербург", link: "#link5" },
];
const useStyles = makeStyles((theme) => ({
  arrowIcon: {
    fontSize: "20px",
    paddingTop: " 0.3rem",
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

const FooterColumn = (props) => {
  const classes = useStyles();

  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore(true);
  };
  const showAllBtn = (
    <div
      className={classNames("mt-3 hover:underline", showMore ? "hidden" : null)}
      onClick={showMoreHandler}
    >
      <a href="#n">
        <FormattedMessage
          id="home.footerColumn.ShowAll"
          defaultMessage="Show all"
        />
        <Icon className={classes.arrowIcon}>chevron_right</Icon>
      </a>
    </div>
  );

  return (
    <div className="flex flex-no-wrap">
      <div className="mr-24 text-base">
        <FooterColumnTitle title={regions} />
        <ul>
          <FooterColumnList showMore={showMore} footerList={footerList1} />
        </ul>
        {showAllBtn}
      </div>
      <div className="mr-24 text-base">
        <FooterColumnTitle title={dishes} />
        <ul>
          <FooterColumnList showMore={showMore} footerList={footerList2} />
        </ul>
        {showAllBtn}
      </div>
    </div>
  );
};

export default FooterColumn;
