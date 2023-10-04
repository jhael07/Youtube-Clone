import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
    id: "dQw4w9WgXcQ",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchVideoResults = async (url) => await axios.get(`${BASE_URL}/${url}`, options);

export const fetchChannelInfo = async (query) =>
  await axios.get(`${BASE_URL}/channel?${query}`, {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  });
