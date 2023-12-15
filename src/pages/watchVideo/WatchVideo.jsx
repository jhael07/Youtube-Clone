import Feed from "../../components/common/Feed";
import { VideoChannelThumbnail } from "../../components/Videos/videoCard/VideoChannelThumbnail";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
<<<<<<< HEAD
import { fetchChannelInfo, fetchRelatedVideos, fetchVideoDetails } from "../../utils/fetchFromApi";
import { useEffect, useState } from "react";
=======
import {
  fetchChannelInfo,
  fetchVideoDetails,
  fetchVideoRelatedVideos,
  getComments,
} from "../../utils/fetchFromApi";

import { useEffect, useReducer, useState } from "react";
import VideoCard from "../../components/Videos/videoCard/VideoCard";
import "./index.css";

import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
>>>>>>> 6f56d0b8820d99765d7bcc01497ce5b0c4575572

const WatchVideo = () => {
  const { id } = useParams();
  const [channelDetails, setchannelDetails] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
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
        await fetchChannelInfo(
          "id=" + watchVideoState.videoDetails?.data?.channelId
        )
      );
    };

    fetchData();
  }, [watchVideoState.videoDetails]);

  useEffect(() => {
<<<<<<< HEAD
    const fetchData = async () => {
      const { data } = (await fetchRelatedVideos(id)).data;
      setRelatedVideos(data);
    };
    fetchData();
  }, [id]);

  console.log(relatedVideos);
  const { data } = videoDetails || {};
=======
    const getRelatedVideosData = async () =>
      setRelatedVideos(await fetchVideoRelatedVideos(id));
    getRelatedVideosData();
  }, [watchVideoState.videoDetails]);

  useEffect(() => {
    const comments = async () => setComments(await getComments(id));
    comments();
  }, []);

  const { data } = watchVideoState.videoDetails || {};

  const videoCommentsCount = comments?.data?.commentsCount;
>>>>>>> 6f56d0b8820d99765d7bcc01497ce5b0c4575572

  return (
    <Feed showTags={false} sideBar={false}>
      <div className="video-container  w-[100vw] fixed justify-between flex left-0 top-0 mt-16 h-[100vh]  overflow-y-scroll">
        <div className=" min-w-[68vw] max-w-[68vw] h-auto pr-2 relative ">
          <VideoPlayer id={id} />
          <div className="w-11/12 pl-7 py-5 font-bold text-xl font-sans px-1 pb-10">
            <div>{data?.title}</div>
            <div className="flex gap-4  mt-4 relative" onClick={() => {}}>
              <VideoChannelThumbnail
                channelId={"as"}
                customChannelUrl={"/search/channel/" + data?.channelId}
                channelThumbnail={
                  channelDetails?.data?.meta?.thumbnail?.length > 0 &&
                  channelDetails?.data?.meta?.thumbnail[0]?.url
                }
              />

              <ChannelDetails
                channelTitle={data?.channelTitle}
                subscriberCount={channelDetails?.data?.meta?.subscriberCount}
              />
              <div className="bg-white text-sm  text-gray-800 p-2 px-4 absolute right-0 rounded-3xl   font-medium cursor-pointer hover:bg-gray-200 transition-all h-fit">
                Subscribe
              </div>
            </div>
            <div
              className={` ${
                isOpen ? "h-32" : ""
              } p-4 pt-6 rounded-lg mt-6 bg-[#1c1b1b] hover:shadow-xl hover:bg-[#252323] hover:cursor-pointer
              hover:shadow-blue-gray-900/90 mb-6 text-sm text-justify whitespace-pre-line relative  overflow-hidden
              text-gray-300 font-normal
              `}
            >
              <div
                className="h-[90%] overflow-hidden "
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {data?.description}
              </div>

              <button
                className="  rounded-md pb-2  min-h-2   w-full flex justify-start text-white"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                {!isOpen ? "Mostrar menos" : "...más"}
              </button>
            </div>
            <div className=" w-full mb-10">
              <h2 className="mb-2">Comments {videoCommentsCount}</h2>
              <hr className="my-4" />

              <CommentsComponent commentArray={comments?.data?.data} />
            </div>
          </div>
        </div>
        <RelatedVideos realatedVideos={relatedVideos} />
      </div>
    </Feed>
  );
};

export default WatchVideo;

const ChannelDetails = ({ channelTitle, subscriberCount }) => {
  return (
    <div className="grid relative">
      <h3 className="text-sm h-fit">{channelTitle}</h3>
      <h3 className="text-[0.75rem] h-fit absolute top-4 whitespace-nowrap text-gray-400 font-normal">
        {subscriberCount} Subscribers
      </h3>
    </div>
  );
};

const RelatedVideos = ({ realatedVideos }) => {
  const { data: videos } = realatedVideos?.data || {};
  return (
    <div className=" w-full text-black rounded min-h-screen">
      {Array.isArray(videos) &&
        videos.map((video, i) => {
          return (
            <div key={i} className="text-white">
              <VideoCard
                channelId={video.channelId}
                key={video?.videoId}
                videoId={video?.videoId}
                channelThumbnail={
                  video?.authorThumbnail?.length > 0 &&
                  video?.authorThumbnail[0]?.url
                }
                thumbnail={video?.thumbnail[1]?.url}
                channelName={video?.channelTitle}
                videoPublished={video?.publishedText}
                videoTitle={video?.title}
                videoViews={+video?.viewCount}
              />
            </div>
          );
        })}
    </div>
  );
};

const CommentsComponent = ({ commentArray }) => {
  return (
    <>
      {commentArray?.map((comments) => {
        return (
          <div className="flex gap-2 mb-4" key={comments?.commentId}>
            <div className=" w-16  rounded-full h-14 overflow-hidden">
              <img src={comments?.authorProfileImageUrl[2]?.url} alt="" />
            </div>
            <div className="w-full p-1">
              <div className="text-sm font-medium">
                {comments?.authorDisplayName}
                <span className="ml-2 text-xs text-gray-400">
                  {comments?.publishedTimeText}
                </span>
              </div>
              <div className="comment">{comments?.textDisplay}</div>
              <div className="likes">
                <AiOutlineLike />
                <AiOutlineDislike />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
