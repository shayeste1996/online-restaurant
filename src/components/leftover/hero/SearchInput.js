import React from "react";
import { makeStyles, InputBase, Icon } from "@material-ui/core";
import classNames from "classnames";
import { injectIntl } from "react-intl";

import { setSearchText } from "store/leftover";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const useStyles = makeStyles(() => ({
  input: {
    border: "1px solid #e8e8e8",
  },
}));

const SearchInput = ({ setSearchText, className, intl }) => {
  const classes = useStyles();
  const search = {
    input: intl.formatMessage({
      id: "home.hero.ShippingAddress",
      defaultMessage: "Enter shipping address ...",
    }),
  };

  return (
    <div className={className}>
      <div
        className={classNames(
          "flex w-full h-12 items-center rounded bg-white",
          classes.input
        )}
      >
        <Icon className="mx-2 text-black">search</Icon>
        <InputBase
          placeholder={search.input}
          className="w-full"
          onChange={setSearchText}
        />
      </div>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSearchText,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(injectIntl(SearchInput));
