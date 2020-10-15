import React, { useEffect } from "react";
import { Icon, List, ListItem, ListItemText } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import { getCurrencies, currencyChange } from "store/currency";
import { openPopover, closePopover } from "store/popover";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Currency = ({
  getCurrencies,
  currencyChange,
  currencies,
  currency,
  openPopover,
  closePopover,
}) => {
  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  const CurrencyList = () => (
    <List>
      {currencies.map((item, index) => (
        <ListItem
          button
          key={index}
          onClick={() => selectCurrency(item)}
          className="top__header--list-items"
        >
          <ListItemText
            className="truncate pr-0"
            primary={item.title}
            disableTypography={true}
          />
        </ListItem>
      ))}
    </List>
  );

  const selectCurrency = (item) => {
    currencyChange(item);
    closePopover();
  };

  const currencyClick = (event) => {
    openPopover(event.currentTarget, {
      children: <CurrencyList />,
      classes: { paper: "w-64 h-auto" },
    });
  };

  return (
    <div
      className="flex items-center h-full top__header--list"
      onClick={currencyClick}
    >
      <span>
        <FormattedMessage id="topheader.Currency" defaultMessage="Currency" />:
      </span>
      <span className="mx-2 text-black">{currency && currency.code}</span>
      <Icon className="cursor-pointer">arrow_drop_down</Icon>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currency: state.currency.current,
  currencies: state.currency.currencies,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getCurrencies,
      currencyChange,
      closePopover,
      openPopover,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
