/* eslint-disable react/prop-types */
import VideoCard from "../../../components/Videos/videoCard/VideoCard";

export const RelatedVideos = ({ realatedVideos }) => {
  const { data: videos } = realatedVideos?.data || {};
  return (
    <div className=" w-full text-black rounded min-h-screen max-w-[22rem]">
      {Array.isArray(videos) &&
        videos.map((video, i) => {
          return (
            <div key={i} className="text-white ">
              <VideoCard
                channelId={video.channelId}
                key={video?.videoId}
                videoId={video?.videoId}
                channelThumbnail={
                  video?.authorThumbnail?.length > 0 &&
                  video?.authorThumbnail[0]?.url
                }
                thumbnail={video?.thumbnail[1]?.url}
                channelName={video?.channelTitle}
                videoPublished={video?.publishedText}
                videoTitle={video?.title}
                videoViews={+video?.viewCount}
              />
            </div>
          );
        })}
    </div>
  );
};
