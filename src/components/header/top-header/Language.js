import React, { useEffect } from "react";
import { Icon, List, ListItem, ListItemText } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLanguages, localeChange } from "store/locale";
import { openPopover, closePopover } from "store/popover";

const Language = ({
  getLanguages,
  localeChange,
  languages,
  current,
  openPopover,
  closePopover,
}) => {
  useEffect(() => {
    getLanguages();
  }, [getLanguages]);

  const LanguageList = () => (
    <List>
      {languages.map((item, index) => (
        <ListItem
          button
          className="top__header--list-items"
          key={index}
          onClick={() => selectLanguage(item)}
        >
          {item.icon && (
            <img
              src={item.icon}
              alt={item.name}
              className="max-h-6 max-w-6 mr-2"
            />
          )}
          <ListItemText
            className="truncate pr-0"
            primary={item.name}
            disableTypography={true}
          />
        </ListItem>
      ))}
    </List>
  );

  const selectLanguage = (item) => {
    localeChange(item);
    closePopover();
  };

  const languageClick = (event) => {
    openPopover(event.currentTarget, {
      children: <LanguageList />,
      classes: { paper: "w-64 h-auto" },
    });
  };

  return (
    <div
      className="flex items-center h-full top__header--list"
      onClick={languageClick}
    >
      <span>
        <FormattedMessage id="topheader.Language" defaultMessage="Language" />:
      </span>
      <span className="mx-2 text-black">{current.locale}</span>
      <Icon className="cursor-pointer">arrow_drop_down</Icon>
    </div>
  );
};
const mapStateToProps = (state) => ({
  current: state.locale.current,
  languages: state.locale.languages,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getLanguages,
      localeChange,
      closePopover,
      openPopover,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Language);
