import React from "react";
import { makeStyles } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import Card from "../Card";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "32px",
    width: "100%",
    "& .header span": {
      color: "#7aa3e6",
    },
    "& .content .item": {
      padding: "12px 0px",
      marginTop: "4px",
      borderBottom: "1px #ebebeb solid",
      "& .name": {
        color: "#7aa3e6",
        fontWeight: "500",
      },
    },
  },
}));

const qualifications = [
  {
    id: "1",
    name: "PhD",
    status: "verfied",
    university: "Lancaster University",
    major: "Engineering",
    description: "Not Applicable  (2014)",
  },
  {
    id: "2",
    name: "BEng",
    status: "verfied",
    university: "Brunel University",
    major: "Engineering",
    description: "Not Applicable  (2013)",
  },
  {
    id: "3",
    name: "A Level",
    status: "verfied",
    university: "Elizabeth Moir School",
    major: "Engineering",
    description: "Not Applicable  (2012)",
  },
  {
    id: "4",
    name: "A Level",
    status: "verfied",
    university: "Elizabeth Moir School",
    major: "Engineering",
    description: "Not Applicable  (2009)",
  },
];

const Qualifications = () => {
  const classes = useStyles();

  const Header = () => (
    <FormattedMessage id="profile.qualifications.Qualifications" defaultMessage="Qualifications" />
  );

  const Content = () => (
    <div>
      {qualifications.map(
        ({ name, status, university, major, description }, index) => (
          <div className="item" key={index}>
            <div className="flex justify-between items-center">
              <div className="name flex-1">{name}</div>
              <div className="bg-green-300 text-white p-1 uppercase">
                {status}
              </div>
            </div>
            <div className="font-bold my-2">{university}</div>
            <div className="my-1">{major}</div>
            <div className="">{description}</div>
          </div>
        )
      )}
    </div>
  );

  return <Card Header={Header} Content={Content} className={classes.root} />;
};
export default Qualifications;
