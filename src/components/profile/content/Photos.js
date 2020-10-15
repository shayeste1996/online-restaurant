import React from "react";
import { makeStyles } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openDialog } from "store/dialog";

import Card from "../Card";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "32px",
    "& .header > div > span": {
      color: "#63b3ed",
    },
    "& .content .imageItem": {
      overflow: "hidden",
      borderRadius: "4px",
      backgroundSize: "240px",
      backgroundColor: "#f5f5f5",
      backgroundImage: "url(/static/images/icons/fallback-pattern.svg)",
      backgroundPosition: "center",
      cursor: "pointer",
    },
  },
}));

const images = [
  {
    id: "1",
    address:
      "/static/images/products/42aad804be3c04ac3ff439ffcbace3c4-450x300.jpeg",
  },
  {
    id: "2",
    address:
      "/static/images/products/95150a4e74aae90746a4ed698f4d3aed-450x300.jpeg",
  },
  {
    id: "3",
    address:
      "/static/images/products/cd73777c67362d15ad0b2c93fd6eb726-450x300.jpeg",
  },
  //{id:'4', address:'/static/images/products/d55b12988b5bda22acb0f13d93ab37bf-450x300.jpeg'},
  //{id:'5', address:'/static/images/products/a197d24070435d0ffe2dae779dc2a1d6-450x300.jpeg'},
];

const Photos = ({ openDialog }) => {
  const classes = useStyles();

  const Header = () => (
    <div>
      <FormattedMessage
        id="profile.photos.MorePhotos"
        defaultMessage="More photos"
      />
      (<span>3</span>)
    </div>
  );

  const ImageDialog = ({ address }) => (
    <div className="imageItem h-64">
      <div
        className="h-full w-auto bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${address})` }}
      />
    </div>
  );

  const imageClick = (address) => {
    openDialog({
      children: <ImageDialog address={address} />,
      maxWidth: "xs",
      fullWidth: true,
      fullScreen: false,
      scroll: "body",
      classes: { paper: "m-0 md:m-48" },
    });
  };

  const Content = () => (
    <div className="flex overflow-x-auto">
      {images.map(({ address }, index) => (
        <div
          className="imageItem h-48 w-56 mr-2 flex-none"
          key={index}
          onClick={() => imageClick(address)}
        >
          <div
            className="h-full w-auto bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${address})` }}
          />
        </div>
      ))}
    </div>
  );

  return <Card Header={Header} Content={Content} className={classes.root} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Photos);
