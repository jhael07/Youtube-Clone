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

export const fetchVideoResults = async (query) => await axios.get(`${BASE_URL}/${query}`, options);

export const fetchChannelInfo = async (query) =>
  await axios.get(`${BASE_URL}/channel?${query}`, {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  });

export const fetchVideoDetails = async (videoId) =>
  await axios.get(BASE_URL + "/video?id=" + videoId, {
    headers: {
      "X-RapidAPI-Key": "413d45fe78mshe7da2066174f654p15a2a3jsne332b879dc2c",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  });

export const fetchRelatedVideos = async (videoId) =>
  await axios.get(BASE_URL + "/related?id=" + videoId, {
    headers: {
      "X-RapidAPI-Key": "413d45fe78mshe7da2066174f654p15a2a3jsne332b879dc2c",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  });
