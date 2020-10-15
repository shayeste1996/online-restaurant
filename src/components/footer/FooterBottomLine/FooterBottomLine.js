import React from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  copyRight: {
    color: "#b8b8b8",
  },
}));

const socialMedia = [
  {
    image: "/static/images/footer/facebook.svg",
    alt: "Facebook",
    link: "#link1",
  },
  {
    image: "/static/images/footer/yandex.svg",
    alt: "Yandex",
    link: "#link1",
  },
  {
    image: "/static/images/footer/instagram.png",
    alt: "Instagram",
    link: "#link1",
  },
  {
    image: "/static/images/footer/twitter.svg",
    alt: "Twitter",
    link: "#link1",
  },
];
const FooterBottomLine = () => {
  const classes = useStyles();

  return (
    <div className="px-3 py-5 flex justify-between flex-row-reverse md:px-32 md:py-10 md:flex-row">
      <div className={classNames(classes.copyRight, "md:text-lg text-sm")}>
        © 2018–2020 ООО «Яндекс.Еда»
      </div>
      <div className="flex flex-row">
        {socialMedia.map((item, index) => (
          <a href={item.link} className="mx-1 md:mx-2" key={index}>
            <img src={item.image} alt={item.alt} className="h-5 md:h-8" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterBottomLine;
