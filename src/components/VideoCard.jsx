import React, { useState } from "react";

const VideoCard = ({
  videoTitle,
  channelName,
  videoViews,
  videoPublished,
  channelThumbnail,
  thumbnail,
//   richThumbnail,
}) => {
  const [previewVideo, setPreviewVideo] = useState(false);
  return (
    <div className="w-auto px-4 mx-auto cursor-pointer">
      <div
        className={`h-fit w-full mx-auto bg-inherit mt-6 ${
          previewVideo ? "" : "rounded-lg"
        }`}
        onMouseEnter={() => setPreviewVideo((prev) => !prev)}
        onMouseLeave={() => setPreviewVideo((prev) => !prev)}
      >
        <img
          src={thumbnail}
          className={`${
            previewVideo ? "" : "rounded-lg"
          } object-fit h-full w-full`}
        />
      </div>
      <div className="flex gap-3  mt-3 w-fit">
        <div className={`rounded-full h-12 w-12 mt-1 `}>
          <img src={channelThumbnail} className="object-fit rounded-full" />
        </div>
        <div className="w-fit pr-1">
          <h2 className="whitespace-break-spaces ">
            {videoTitle?.length > 40
              ? videoTitle.substring(0, 40) + "..."
              : videoTitle}
          </h2>
          <h6 className="text-sm mt-2  text-gray-400">{channelName}</h6>
          <div className="flex gap-2 mt-[-.4rem]">
            <h6 className="text-sm mt-2 text-gray-400">
              {videoViews > 1000
                ? `${videoViews?.toLocaleString()} K`
                : videoViews?.toLocaleString()}{" "}
              Views
            </h6>
            <h6 className="text-sm mt-2 text-gray-400">{videoPublished}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
