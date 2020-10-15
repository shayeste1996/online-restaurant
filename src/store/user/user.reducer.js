import * as Actions from "./user.actions";

const addressList = [
  {
    id: "1",
    description: "Комсомольская площадь, 6",
    lat: 34.3419116,
    lng: 47.0879999,
  },
  {
    id: "2",
    description: "Котельническая набережная, 1/15",
    lat: 34.3419116,
    lng: 47.0879999,
  },
];
const orderList = [
  {
    id: "1",
    date: "10 Апреля 2020, 10:36",
    restaurant: "Moo Moo Burgers",
    totalPrice: 150,
    itemName: "Хачапури Мегрули",
    itemQuantity: "1",
    itemPrice: "20",
    optionItemName: "Облепиха-Малина",
    optionItemQuantity: 20,
  },
  {
    id: "2",
    date: "120 Апреля 2020, 10:36",
    restaurant: "Moo Moo Burgers",
    totalPrice: 1250,
    itemName: "Хачапури Мегрули",
    itemQuantity: "158",
    itemPrice: "258",
    optionItemName: "Подсолнечное",
    optionItemQuantity: 10,
  },
];
const userInfo = {
  name: "Mohammad",
  Email: "mohammadcj003@gmail.com",
  phone: 9188390225,
  birthDay:"1996/05/15"
};

const initialState = {
  addressList,
  orderList,
  userInfo,
};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_ADDRESS: {
      return {
        ...state,
        addressList: [action.payload, ...state.addressList],
      };
    }
    case Actions.EDIT_ADDRESS: {
      return editAddress(state, action.payload);
    }
    case Actions.REMOVE_ADDRESS: {
      return removeAddress(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

const editAddress = (state, address) => {
  const addressList = state.addressList;
  const addressIndex = addressList.findIndex((item) => item.id === address.id);

  const newAddressList =
    addressIndex > -1
      ? [
          ...addressList.slice(0, addressIndex),
          address,
          ...addressList.slice(addressIndex + 1),
        ]
      : addressList;

  return {
    ...state,
    addressList: newAddressList,
  };
};

const removeAddress = (state, address) => {
  const addressList = state.addressList;

  return {
    ...state,
    addressList: addressList.filter((item) => item.id !== address.id),
  };
};

export default userReducer;
