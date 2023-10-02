import React from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import Navbar from "./navbar/Navbar";
import { LoadingScreen } from "./LoadingScreen";
import TagsHomeComponent from "./TagsHomeComponent/TagsHomeComponent";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await fetchFromAPI(
        `search?part=snippet&query=${selectedCategory}`
      );
      setVideos(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="flex w-full">
      {isLoading && <LoadingScreen />}
      <div className=" w-full flex mx-auto">
        <div className="w-full sm:w-11/12 lg:ml-16 relative justify-center mx-auto ">
          <Navbar />
          <TagsHomeComponent
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="mt-8  max-w-[150rem] mx-auto mb-10">
            <div className=" justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-0 gap-y-4 w-full mt-1">
              <VideosComponent videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

const VideosComponent = ({ videos }) => {
  return (
    <>
      {videos?.data?.map((video, i) => (
        <div key={i}>
          {video?.type === "video" && (
            <div key={i}>
              <VideoCard
                key={video?.id}
                channelThumbnail={
                  video?.channelThumbnail?.length > 0 &&
                  video?.channelThumbnail[0]?.url
                }
                thumbnail={
                  video?.thumbnail[0]?.url ||
                  video?.snippet?.thumbnails?.high?.url
                }
                channelName={
                  video?.channelTitle || video?.snippet?.channelTitle
                }
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
