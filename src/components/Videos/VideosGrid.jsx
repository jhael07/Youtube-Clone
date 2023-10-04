import VideoCard from "./videoCard/VideoCard";

/* eslint-disable react/prop-types */
const VideosGrid = ({ videos }) => {
  console.log(videos);
  return (
    <>
      {videos?.data?.map((video, i) => (
        <div key={i}>
          {video?.type === "video" && (
            <div key={i}>
              <VideoCard
                channelId={video.channelId}
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
