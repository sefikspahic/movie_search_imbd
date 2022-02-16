import { combineReducers } from "redux";

import searchReducer from "./Search/search.reducer";
import movieReducer from "./Movie/movie.reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  currentMovie: movieReducer,
});

export default rootReducer;
