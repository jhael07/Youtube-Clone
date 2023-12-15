/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchChannelInfo,
  fetchVideoDetails,
  fetchVideoRelatedVideos,
  getComments,
} from "../../../utils/fetchFromApi";

export const useWatchVideo = () => {
  const { id } = useParams();
  const [channelDetails, setchannelDetails] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [relatedVideos, setRelatedVideos] = useState();
  const [comments, setComments] = useState();

  const reducer = (state, action) => {
    switch (action.type) {
      case "videoDetails":
        return { videoDetails: action.payload };
      case "relatedVideos":
        return { relatedVideos: action.payload };
    }
  };

  const [watchVideoState, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "videoDetails", payload: await fetchVideoDetails(id) });
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      setchannelDetails(
        await fetchChannelInfo("id=" + watchVideoState.videoDetails?.data?.channelId)
      );
    };

    fetchData();
  }, [watchVideoState.videoDetails]);

  useEffect(() => {
    const getRelatedVideosData = async () => setRelatedVideos(await fetchVideoRelatedVideos(id));
    getRelatedVideosData();
  }, [watchVideoState.videoDetails, id]);

  useEffect(() => {
    const comments = async () => setComments(await getComments(id));
    comments();
  }, [id]);

  const { data } = watchVideoState.videoDetails || {};

  const videoCommentsCount = comments?.data?.commentsCount;

  return {
    data,
    videoCommentsCount,
    channelDetails,
    isOpen,
    setIsOpen,
    relatedVideos,
    comments,
    id,
  };
};
