import { SET_MOVIE } from "./movie.types";

export const setMovie = (selectedMovie) => {
  return {
    type: SET_MOVIE,
    payload: selectedMovie,
  };
};
