import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../../../context/ContextProvider";
/* eslint-disable react/prop-types */
export const VideoThumbnail = ({ thumbnail, videoId, videoDetails }) => {
  const navigate = useNavigate();

  const { setWatchVideoTitle } = useContext(context);

  const handleClick = () => {
    navigate("/video/" + videoId);
    setWatchVideoTitle(videoDetails?.videoTitle || videoDetails?.title);
  };

  return (
    <div
      className={`h-fit w-full mx-auto bg-inherit mt-6 hover:cursor-pointer `}
      onClick={handleClick}
    >
      <img src={thumbnail} className={`rounded-lg object-fit h-full w-full`} />
    </div>
  );
};
