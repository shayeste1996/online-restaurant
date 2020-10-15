import React from "react";
import { makeStyles, Icon } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import FooterColumnTitle from "./FooterColumnTitle";
import FooterColumnList from "./FooterColumnList";

const useStyles = makeStyles((theme) => ({
  mailIcon: {
    fontSize: "18px",
    paddingTop: " 0.2rem",
    marginRight: "5px",
  },
}));

const footerList = [
  { text: "Контакты", link: "#link1" },
  { text: "Доставка", link: "#link2" },
  { text: "Пользовательское соглашение", link: "#link3" },
  { text: "Вопросы и ответы", link: "#link4" },
  { text: "Стать курьером", link: "#link5" },
  { text: "Еда для бизнеса", link: "#link6" },
  { text: "Переработка пластика", link: "#link7" },
];

const AboutCompany = (
  <FormattedMessage
    id="home.footerColumnInfo.AboutCompany"
    defaultMessage="About company"
  />
);
const Feedback = (
  <FormattedMessage
    id="home.footerColumnInfo.Feedback"
    defaultMessage="Feedback"
  />
);

const FooterColumnInfo = () => {
  const classes = useStyles();

  return (
    <div className="text-left md:text-right text-base">
      <FooterColumnTitle title={AboutCompany} />
      <ul>
        <FooterColumnList footerList={footerList} />
      </ul>
      <div className="mt-12">
        <a href="#mail">
          <Icon className={classes.mailIcon}>mail</Icon>
          {Feedback}
        </a>
      </div>
    </div>
  );
};

export default FooterColumnInfo;
