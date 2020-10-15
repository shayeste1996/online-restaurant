import React from "react";
import { Link } from "react-router-dom";

const logo = {
  src: "/static/images/header/logo.svg",
  alt: "logo",
};

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo.src} alt={logo.alt} className="w-30 sm:w-64" />
    </Link>
  );
};

export default Logo;
