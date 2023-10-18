/* eslint-disable react/prop-types */

import { VideoChannelThumbnail } from "./VideoChannelThumbnail";
import { VideoDetails } from "./VideoDetails";
import { VideoThumbnail } from "./VideoThumbnail";

const VideoCard = (props) => {
  const {
    videoTitle,
    channelName,
    videoViews,
    videoPublished,
    channelThumbnail,
    thumbnail,
    channelId,
    videoId,
  } = props;

  // prettier-ignore
  const THOUSANDS_VIEWS = videoViews > 1_000 && videoViews < 1_000_000 && `${videoViews?.toLocaleString()} K `;

  const MILLIONS_VIEWS = videoViews > 1_000_000 && `${videoViews?.toLocaleString()} M `;

  return (
    <div className="w-auto px-4 mx-auto cursor-pointer grid ">
      <VideoThumbnail thumbnail={thumbnail} videoId={videoId} />
      <div className="flex gap-3  mt-3 w-fit">
        <VideoChannelThumbnail
          channelThumbnail={channelThumbnail}
          customChannelUrl={"search/channel/" + channelId}
        />
        <VideoDetails
          channelName={channelName}
          publishedDate={videoPublished}
          videoTitle={videoTitle}
          views={THOUSANDS_VIEWS || MILLIONS_VIEWS}
        />
      </div>
    </div>
  );
};

export default VideoCard;
