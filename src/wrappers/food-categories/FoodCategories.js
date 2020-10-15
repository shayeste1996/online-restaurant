import React from "react";
import { FormattedMessage } from "react-intl";
import { Icon } from "@material-ui/core";
import { connect } from "react-redux";

import { getRestaurantCategories } from "store/restaurant";
import { openPopover ,closePopover} from "store/popover";
import { getCurrentSort } from "store/restaurant";
import { openMenu } from "store/menu";
import { setSearchText } from "store/restaurant";

import { bindActionCreators } from "redux";

import Sort from "components/food-categories/Sort";
import FoodLists from "components/food-categories/FoodLists";
import FoodSearch from "components/food-categories/FoodSearch"
const FoodCategories = (props) => {
  const {
    getRestaurantCategories,
    categorise,
    city,
    openPopover,
    getCurrentSort,
    closePopover,
  } = props;

  const sort = (
    <FormattedMessage id="home.category.Sort" defaultMessage="Sorting" />
  );
  const sortClick = (event) => {
    openPopover(event.currentTarget, {
      children: <Sort {...props} />,
      classes: { paper: "w-64 h-auto" },
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-between borderbottom">
      <FoodLists {...props} />
      <div className="btn--sort" onClick={sortClick}>
        <Icon className="mr-2">sort</Icon>
        <span>{sort}</span>
      </div>
      <FoodSearch {...props} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  categorise: state.restaurant.restaurantCategorise,
  city: state.city.current,
  sortList: state.restaurant.sortList,
  currentSort: state.restaurant.currentSort,
    time: state.timeList.time,
    selectedItem: state.menu.selectedItem,

});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getRestaurantCategories,
      openPopover,
      getCurrentSort,
      closePopover,
        setSearchText,
      openMenu,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodCategories);
