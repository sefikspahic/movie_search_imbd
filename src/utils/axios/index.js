import axios from "axios";

// Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const configAxios = axios.create({
  baseURL: `https://imdb8.p.rapidapi.com`,
  timeout: 10000,
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
  },
});

export default configAxios;
