import React from "react";
import { Link } from "react-router-dom";

const btnList = [
  {
    src: "/static/images/footer/app-store.svg",
    link: "/#app-store",
    alt: "app-store",
  },
  {
    src: "/static/images/footer/google-play.svg",
    link: "/#google-play",
    alt: "google-play",
  },
];
const grayLogo = {
  src: "/static/images/header/gray-logo.svg",
  alt: "logo",
};

const FooterTopLine = () => {
  return (
    <div className="flex flex-row justify-between px-5 py-4 md:px-12 md:py-5 md:mx-16 ">
      <div className="w-40 mt-2 md:mt-0 md:ml-4">
        <Link to="/">
          <img src={grayLogo.src} alt={grayLogo.alt} className="w-30 sm:w-40" />
        </Link>
      </div>
      <div className="w-32 flex justify-end flex-wrap sm:w-2/3 sm:flex-no-wrap">
        {btnList.map((btn, index) => (
          <a href={btn.link} key={index}>
            <img src={btn.src} alt={btn.alt} className="mr-5 mb-2 md:mb-0" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterTopLine;
