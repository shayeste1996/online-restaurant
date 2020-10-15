export const GET_ADDRESS = "[ADDRESS] GET_ADDRESS";
export const ADD_ADDRESS = "[ADDRESS] ADD_ADDRESS";
export const EDIT_ADDRESS = "[ADDRESS] EDIT_ADDRESS";
export const REMOVE_ADDRESS = "[ADDRESS] REMOVE_ADDRESS";

export function getAddresses() {
  return {
    type: GET_ADDRESS,
  };
}

export function addAddress(address) {
  return {
    type: ADD_ADDRESS,
    payload: address,
  };
}

export function editAddress(address) {
  return {
    type: EDIT_ADDRESS,
    payload: address,
  };
}

export function removeAddress(address) {
  return {
    type: REMOVE_ADDRESS,
    payload: address,
  };
}
