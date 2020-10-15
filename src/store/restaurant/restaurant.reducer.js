import * as Actions from "./restaurant.actions";
import React from "react";
import { FormattedMessage } from "react-intl";

const initialState = {
  restaurants: [],
  restaurantCategorise: [],
  restaurantProductCategorise: [],
  searchText: "",
  currentSort: "1",
  sortList: [
    {
      id: "1",
      name: (
        <FormattedMessage
          id="home.mobileSearchBox.TrustYou"
          defaultMessage="Trust you"
        />
      ),
    },
    {
      id: "2",
      name: (
        <FormattedMessage
          id="home.mobileSearchBox.TopRated"
          defaultMessage="Top rated"
        />
      ),
    },
    {
      id: "3",
      name: (
        <FormattedMessage
          id="home.mobileSearchBox.Fast"
          defaultMessage="Fast"
        />
      ),
    },
    {
      id: "4",
      name: (
        <FormattedMessage
          id="home.mobileSearchBox.Inexpensive"
          defaultMessage="Inexpensive"
        />
      ),
    },
    {
      id: "5",
      name: (
        <FormattedMessage
          id="home.mobileSearchBox.Expensive"
          defaultMessage="Expensive"
        />
      ),
    },
  ],
};

const restaurant = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_RESTAURANTS: {
      return {
        ...state,
        restaurants: action.payload,
      };
    }
    case Actions.GET_RESTAURANT_CATEGORIES: {
      return {
        ...state,
        restaurantCategorise: action.payload,
      };
    }
    case Actions.GET_RESTAURANT_PRODUCT_CATEGORIES: {
      return {
        ...state,
        restaurantProductCategorise: action.payload,
      };
    }
    case Actions.SET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    case Actions.GET_CURRENT_SORT: {
      return {
        ...state,
        currentSort: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default restaurant;
