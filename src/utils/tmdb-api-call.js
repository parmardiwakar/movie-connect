import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_ACCESS_TOKEN = import.meta.env.VITE_APP_TMDB_ACCESS_TOKEN;

const headers = {
  Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
};

export const fetchData = async (endPoint, abortController, params) => {
  const full_url = BASE_URL + endPoint;

  try {
    const { data } = await axios.get(full_url, {
      headers,
      signal: abortController.signal,
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
