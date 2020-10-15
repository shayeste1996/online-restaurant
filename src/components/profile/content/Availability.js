import React from "react";
import { makeStyles } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import Card from "../Card";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "16px",
    "& .header": {
      fontSize: "24px",
      marginBottom: "16px",
    },
    "& .content": {
      "& .cardcontent": {
        padding: "0x",
        color: "#7e7d8f",
        overflow: "auto",
        [theme.breakpoints.up("md")]: {
          paddingTop: "20px",
          padding: "30px",
        },
      },
      "& table": {
        marginTop: "0",
        marginBottom: "1em",
      },
      "& .profileavailability": {
        width: "100%",
      },
      "& .availheader th": {
        textAlign: "center",
        color: "#626262",
        padding: "5px",
        borderTop: "1px solid #e7e6e6",
        lineHeight: "24px",
      },
      "& .availrow th": {
        textAlign: "left",
        color: "#626262",
        borderTop: "1px solid #eee",
        borderRight: "1px solid #eee",
        padding: "7px",
        paddingTop: "16px",
        paddingBottom: "11px",
      },
      "& .availcol": {
        textAlign: "left",
        color: "#626262",
        borderTop: "1px solid #eee",
        borderRight: "1px solid #eee",
        padding: "7px",
        paddingTop: "16px",
        paddingBottom: "11px",
      },
      "& .availrow td": {
        borderTop: "1px solid #f6f6f6",
        textAlign: "center",
      },
      "& .availrow td span.mobno": {
        display: "inline-block",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
      "& .mobyes": {
        display: "none",
        [theme.breakpoints.down("sm")]: {
          display: "inline-block",
        },
      },
    },
  },
}));

const Availability = () => {
  const classes = useStyles();

  const Header = () => (
    <FormattedMessage
      id="profile.availability.Availability"
      defaultMessage="Availability"
    />
  );
  const Content = () => (
    <div className="cardcontent">
      <table className="profileavailability" cellSpacing="0">
        <tbody>
          <tr className="availheader">
            <th className="availcol">&nbsp;</th>
            <th>
              <FormattedMessage
                id="profile.availability.Monday"
                defaultMessage="Monday"
              />
            </th>
            <th>
              <FormattedMessage
                id="profile.availability.Tuesday"
                defaultMessage="Tuesday"
              />
            </th>
            <th>
              <FormattedMessage
                id="profile.availability.Wednesday"
                defaultMessage="Wednesday"
              />
            </th>
            <th>
              <FormattedMessage
                id="profile.availability.Thursday"
                defaultMessage="Thursday"
              />
            </th>
            <th>
              <FormattedMessage
                id="profile.availability.Friday"
                defaultMessage="Friday"
              />
            </th>
            <th>
              <FormattedMessage
                id="profile.availability.Saturday"
                defaultMessage="Saturday"
              />
            </th>
            <th>
              <FormattedMessage
                id="profile.availability.Sunday"
                defaultMessage="Sunday"
              />
            </th>
          </tr>
          <tr className="availrow">
            <th>
              <FormattedMessage
                id="profile.availability.Morning"
                defaultMessage="Morning"
              />
            </th>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
          </tr>
          <tr className="availrow">
            <th>
              <FormattedMessage
                id="profile.availability.Afternoon"
                defaultMessage="Afternoon"
              />
            </th>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
          </tr>
          <tr className="availrow">
            <th>
              <FormattedMessage
                id="profile.availability.AfterSchool"
                defaultMessage="After School"
              />
            </th>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
          </tr>
          <tr className="availrow availrowlast">
            <th>
              <FormattedMessage
                id="profile.availability.Evening"
                defaultMessage="Evening"
              />
            </th>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
            <td>
              <span className="mobno">
                <img src="/static/images/icons/avail-yes.png" alt="" />
              </span>
              <span className="mobyes">
                <img src="/static/images/icons/avail-yes-mob.png" alt="" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return <Card Header={Header} Content={Content} className={classes.root} />;
};

export default Availability;
