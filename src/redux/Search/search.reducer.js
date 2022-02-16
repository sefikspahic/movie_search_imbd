import { SET_SEACH } from "./search.types";

const INITIAL_STATE = {
  search: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEACH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
