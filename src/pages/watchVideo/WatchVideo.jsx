/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Feed from "../../components/common/Feed";
import VideoPlayer from "./VideoPlayer";

import "./index.css";
import { CommentsComponent } from "./components/CommentsComponent";
import { RelatedVideos } from "./components/RelatedVideos";
import { useWatchVideo } from "./hooks/useWatchVideo";
import { ChannelsVideoDetails } from "./components/ChannelVideoDetails";

const WatchVideo = () => {
  const {
    data,
    channelDetails,
    isOpen,
    setIsOpen,
    videoCommentsCount,
    relatedVideos,
    comments,
    id,
  } = useWatchVideo();

  const handleOpenDescription = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Feed showTags={false} sideBar={false}>
      <div className="video-container page-structure">
        <div className="video-section">
          <VideoPlayer id={id} />
          <div className="details-comments-structure">
            <div>
              <div>{data?.title}</div>

              <ChannelsVideoDetails
                channelDetails={channelDetails}
                channelId={data?.channelId}
                channelTitle={data?.channelTitle}
                description={data?.description}
                handleOpenDescription={handleOpenDescription}
                isOpen={isOpen}
              />
            </div>

            <div className=" w-full mb-10">
              <h2 className="mb-2">Comments {videoCommentsCount}</h2>
              <hr className="my-4" />
            </div>
            <CommentsComponent commentArray={comments?.data?.data} />
          </div>
        </div>
        <RelatedVideos realatedVideos={relatedVideos} />
      </div>
    </Feed>
  );
};

export default WatchVideo;
