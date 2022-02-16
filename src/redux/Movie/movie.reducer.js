import { SET_MOVIE } from "./movie.types";

const INITIAL_STATE = {
  currentMovie: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
