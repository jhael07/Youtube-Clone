import VideoCard from "./VideoCard";

/* eslint-disable react/prop-types */
const VideosGrid = ({ videos }) => {
  return (
    <>
      {videos?.data?.map((video, i) => (
        <div key={i}>
          {video?.type === "video" && (
            <div key={i}>
              <VideoCard
                key={video?.id}
                channelThumbnail={
                  video?.channelThumbnail?.length > 0 && video?.channelThumbnail[0]?.url
                }
                thumbnail={video?.thumbnail[0]?.url}
                channelName={video?.channelTitle}
                videoPublished={video?.publishedText}
                videoTitle={video?.title}
                videoViews={+video?.viewCount}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default VideosGrid;
