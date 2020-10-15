import React, { Suspense } from "react";
import { Box } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import HeaderLogo from "./HeaderLogo";
import Loading from "../../assert/Loading";

const HeaderGroupButton = React.lazy(() => import("./HeaderGroupButton"));

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

const DesktopHeader = () => {
  return (
    <div className="mx-2 w-full text-base my-4">
      <div className=" flex flex-row justify-between">
        <Box className="block mx-0">
          <HeaderLogo />
        </Box>
        <Box className="leading-loose">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.address}
              target="_blank"
              className="mx-5"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </Box>{" "}
        <HeaderGroupButton />
      </div>
    </div>
  );
};

export default DesktopHeader;
