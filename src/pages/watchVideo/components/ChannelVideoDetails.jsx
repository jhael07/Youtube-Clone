/* eslint-disable react/prop-types */
import { VideoChannelThumbnail } from "../../../components/Videos/videoCard/VideoChannelThumbnail";
import { ChannelDetails } from "./ChannelDetails";

export const ChannelsVideoDetails = ({
  channelId,
  channelDetails,
  channelTitle,
  isOpen,
  handleOpenDescription,
  description,
}) => {
  return (
    <>
      <div className="flex gap-4  mt-4 relative">
        <VideoChannelThumbnail
          channelId={"as"}
          customChannelUrl={"/search/channel/" + channelId}
          channelThumbnail={
            channelDetails?.data?.meta?.thumbnail?.length > 0
              ? channelDetails?.data?.meta?.thumbnail[0]?.url
              : ""
          }
        />
        <ChannelDetails
          channelTitle={channelTitle}
          subscriberCount={channelDetails?.data?.meta?.subscriberCount}
        />
        <button className="subscribe-button">Subscribe</button>
      </div>

      <div className={`video-description ${isOpen ? "h-32" : ""}`}>
        <div className="h-[90%] overflow-hidden " onClick={handleOpenDescription}>
          {description}
        </div>

        <button
          className="rounded-md pb-2 min-h-2 w-full flex justify-start text-white"
          onClick={handleOpenDescription}
        >
          {!isOpen ? "Mostrar menos" : "...más"}
        </button>
      </div>
    </>
  );
};
