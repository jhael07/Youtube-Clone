import { VideoChannelThumbnail } from "./videoCard/VideoChannelThumbnail";
import { VideoThumbnail } from "./videoCard/VideoThumbnail";

/* eslint-disable react/prop-types */
const VideosSearchResult = ({ videos }) => {
  return (
    <>
      {videos?.data?.map((video, i) => (
        <div key={i}>
          {video?.type === "video" && (
            <div className="w-11/12 mx-auto gap-4 flex" key={i}>
              <div className="w-96">
                <VideoThumbnail thumbnail={video?.thumbnail[0]?.url} videoId={video?.videoId} />
              </div>
              <div className="mt-5 w-7/12">
                <h2 className="whitespace-break-spaces ">{video?.title}</h2>
                <div className="grid gap-2 mt-[.2rem]">
                  <h6 className="text-sm mt-2 text-gray-400">
                    {Number(video?.viewCount).toLocaleString()} Views
                  </h6>

                  <div className="flex gap-4">
                    <VideoChannelThumbnail
                      customChannelUrl={"channel/" + video?.channelId}
                      channelThumbnail={video?.channelThumbnail && video?.channelThumbnail[0]?.url}
                    />{" "}
                    <h6 className="text-sm mt-2 text-gray-400">{video?.channelTitle}</h6>
                  </div>
                </div>
                <h2 className="mt-6 text-sm leading-6">{video?.description}</h2>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default VideosSearchResult;
