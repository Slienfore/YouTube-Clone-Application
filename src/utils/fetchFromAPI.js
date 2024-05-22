import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const options = {
  baseURL: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    // grab from .env file
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

const ax = axios.create(options);

export const $fetch = async (url) => {
  const { data } = await ax.get(url);

  return data;
};
