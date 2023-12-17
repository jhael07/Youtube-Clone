import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const VideoDetails = ({
  videoTitle,
  channelName,
  views,
  publishedDate,
  channelId,
}) => {
  const navigate = useNavigate();
  const handleChannelRedirection = () =>
    navigate("/search/channel/" + channelId);

  return (
    <div className="w-fit pr-1">
      <h1
        className="whitespace-break-spaces md:text-[0.96rem]"
        onClick={handleChannelRedirection}
      >
        {videoTitle?.length > 60
          ? videoTitle.substring(0, 60) + "..."
          : videoTitle}
      </h1>
      <button
        className="text-sm text-gray-400"
        onClick={handleChannelRedirection}
      >
        {channelName}
      </button>
      <div className="flex gap-2 mt-[-.4rem]">
        <h6 className="text-sm mt-2 text-gray-400">
          {views}
          Views
        </h6>
        <h6 className="text-sm mt-2 text-gray-400">{publishedDate}</h6>
      </div>
    </div>
  );
};
