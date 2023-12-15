import { Link } from "react-router-dom";
import { VideoChannelThumbnail } from "../videoCard/VideoChannelThumbnail";
import { VideoThumbnail } from "../videoCard/VideoThumbnail";
import useVideoDetails from "../../../hooks/useVideoDetails";

/* eslint-disable react/prop-types */
const VideosSearchResult = ({ videos, w, description }) => {
  return (
    <>
      {videos?.data?.map((video, i) => (
        <div key={i}>
          {video?.type === "video" && (
            <SearchVideo video={video} width={w} description={description} />
          )}
        </div>
      ))}
    </>
  );
};

export default VideosSearchResult;

const SearchVideo = ({ video, width, description }) => {
  const { handleVideoTitle } = useVideoDetails();

  return (
    <div className={` ${width} mx-auto gap-4 flex mt-6`}>
      <div className="w-96 ">
        <VideoThumbnail
          thumbnail={video?.thumbnail[0]?.url}
          videoId={video?.videoId}
          videoDetails={video}
        />
      </div>
      <div className="mt-5 w-7/12">
        <Link
          to={"/video/" + video?.videoId}
          onClick={() => handleVideoTitle(video?.title)}
          className="whitespace-break-spaces max-w-xl font-medium hover:cursor-pointer"
        >
          {video?.title}
        </Link>
        <div className="grid gap-2 mt-[.2rem]">
          <div className="flex gap-6">
            <h6 className="text-sm mt-2 text-gray-400">
              {Number(video?.viewCount).toLocaleString()} Views
            </h6>
            <h6 className="text-sm mt-2 text-gray-400 list-item"> {video?.publishedText}</h6>
          </div>

          <div className="flex gap-4 items-center">
            {description && (
              <div className=" min-w-[1.8rem] w-[6%]">
                <VideoChannelThumbnail
                  customChannelUrl={"channel/" + video?.channelId}
                  channelThumbnail={video?.channelThumbnail && video?.channelThumbnail[0]?.url}
                />
              </div>
            )}{" "}
            <Link
              to={`channel/${video?.channelId}`}
              className="text-sm  text-gray-400 whitespace-nowrap"
            >
              {video?.channelTitle}
            </Link>
          </div>
        </div>
        {description && <h2 className="mt-6 text-xs leading-6 w-10/12">{video?.description}</h2>}
      </div>
    </div>
  );
};
