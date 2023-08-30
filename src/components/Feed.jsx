import React from "react";
import { PiHouseThin } from "react-icons/pi";
import { MdSubscriptions } from "react-icons/md";
import Tags from "./Tags";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useState, useEffect } from "react";
import Home from "../pages/Home/Home";
import SectionTitle from "./SectionTitle";
import VideoCard from "./VideoCard";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState(null);
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
  }, [selectedCategory]);

  const handleScroll = (position) => {
    const slideRight = document.querySelector("#slider");
    if (position === "right")
      slideRight.scrollLeft = slideRight.scrollLeft + 200;
    else slideRight.scrollLeft = slideRight.scrollLeft - 200;
  };

  return (
    <div className="flex w-full">
      {/* <div className="fixed bottom-0 py-7 px-4 bg-coldGray950 w-full">klk</div>/ */}
      {isLoading && (
        <div className="min-h-screen fixed let-0 w-full top-0  bg-[#00000075] flex justify-center items-center z-50"></div>
      )}
      <SideFeed />
      <div className="w-full lg:w-11/12  ">
        <div className=" scroll-smooth sticky top-0 bg-[#0f0f0fcb] backdrop-blur-md ">
          <div
            onClick={() => handleScroll("left")}
            className="bg-gradient-to-r from-coldGray950 to-[#1b1818ac] hover:cursor-pointer backdrop-blur-lg p-1 2xl:hidden left-2 absolute h-8 w-8 top-5 "
          >
            <AiOutlineLeft className="text-white  text-xl " />
          </div>
          <div className=" w-full max-w-96   flex  mt-4 items-center m-auto justify-center px-10 scroll-smooth  ">
            <Tags setter={setSelectedCategory} selected={selectedCategory} />
          </div>
          <div
            onClick={() => handleScroll("right")}
            id="right"
            className="bg-gradient-to-l from-coldGray950 to-[#1b1818ac] hover:cursor-pointer  backdrop-blur-sm p-1 absolute 2xl:hidden  h-8 w-8 top-5 right-2"
          >
            <AiOutlineRight className="text-white  text-xl " />
          </div>
        </div>
        <div className="px-2 sm:px-4 mt-2 max-w-[150rem] mx-auto mb-10">
          <SectionTitle text={"Hot Videos"} />
          <div
            className=" justify-center grid grid-cols-1 sm:grid-cols-2 
          lg:grid-cols-3  2xl:grid-cols-4   gap-x-0 gap-y-4 w-full mt-1"
          >
            {videos?.map(
              (video) =>
                video.type === "video" && (
                  <VideoCard
                    key={video?.id}
                    channelThumbnail={
                      video?.channelThumbnail?.length > 0 &&
                      video?.channelThumbnail[0]?.url
                    }
                    // richThumbnail={
                    //   video?.richThumbnail?.length > 0 &&
                    //   video?.richThumbnail[0]?.url
                    // }
                    thumbnail={video?.thumbnail[0]?.url}
                    channelName={video?.channelTitle}
                    videoPublished={video?.publishedText}
                    videoTitle={video?.title}
                    videoViews={+video?.viewCount}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

const SideFeedArray = [
  {
    icon: <PiHouseThin className="text-2xl" />,
    label: "New",
  },
  {
    icon: <MdSubscriptions className="text-2xl" />,
    label: "Principal",
  },
];

const SideFeed = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="hidden lg:flex w-16  h-screen   flex-col gap-2 ">
      {SideFeedArray.map((option) => (
        <button className="hover:bg-coldGray900 px-9  flex flex-col justify-center gap-1 items-center h-20 rounded-md">
          {option.icon}
          <h5 className="text-xs">{option.label}</h5>
        </button>
      ))}
    </div>
  );
};
