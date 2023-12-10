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

export const fetchVideoResults = async (query) =>
  await axios.get(`${BASE_URL}/${query}`, options);

export const fetchChannelInfo = async (query) =>
  await axios.get(`${BASE_URL}/channel?${query}`, {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  });

export const fetchVideoDetails = async (videoId) =>
  await getVideoInfo("/video?id=", videoId);

export const fetchVideoRelatedVideos = async (videoId) =>
  await getVideoInfo("/related?id=", videoId);

export const getComments = async (videoId) =>
  await getVideoInfo("/comments?id=", videoId);

const getVideoInfo = async (endPoint, videoId) =>
  await axios.get(BASE_URL + endPoint + videoId, {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  });
