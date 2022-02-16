import { SET_SEACH } from "./search.types";

export const search = (searchValue) => {
  console.log(searchValue)
  return {
    type: SET_SEACH,
    payload: searchValue,
  };
};
