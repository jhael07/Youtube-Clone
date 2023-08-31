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
import Navbar from "./navbar/Navbar";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      // const { data } = await fetchFromAPI(
      //   `search?part=snippet&query=${selectedCategory}`
      // );
      const { data } = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  const handleScroll = (position) => {
    const slideRight = document.querySelector("#slider");
    if (position === "right")
      slideRight.scrollLeft = slideRight.scrollLeft + 200;
    else slideRight.scrollLeft = slideRight.scrollLeft - 200;
  };

  return (
    <div className="flex w-full">
      {isLoading && (
        <div className="min-h-screen sticky let-0 w-full top-0  bg-[#00000075] flex justify-center items-center z-50"></div>
      )}

      <div className=" w-full flex mx-auto">
        <div className="w-full sm:w-11/12 sm:ml-12 relative  justify-center ">
          <Navbar />
          <div className=" scroll-smooth sticky top-12 z-0 bg-coldGray950 backdrop-blur-md ">
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
          <div className="mt-2  max-w-[150rem] mx-auto mb-10">
            <SectionTitle text={"Hot Videos"} />
            <div
              className=" justify-center grid grid-cols-1 sm:grid-cols-2 
          lg:grid-cols-3  2xl:grid-cols-4   gap-x-0 gap-y-4 w-full mt-1"
            >
              {videos?.items?.map((video) => (
                <div>
                  <VideoCard
                    key={video?.id}
                    channelThumbnail={
                      // video?.channelThumbnail?.length > 0 &&
                      // video?.channelThumbnail[0]?.url
                      ""
                    }
                    thumbnail={
                      // video?.thumbnail[0]?.url ||
                      video?.snippet?.thumbnails?.high?.url
                    }
                    channelName={
                      video?.channelTitle || video?.snippet?.channelTitle
                    }
                    videoPublished={video?.publishedText}
                    videoTitle={video?.snippet?.title}
                    videoViews={+video?.viewCount}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
