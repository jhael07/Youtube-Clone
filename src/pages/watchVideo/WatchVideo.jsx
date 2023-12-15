import Feed from "../../components/common/Feed";
import { VideoChannelThumbnail } from "../../components/Videos/videoCard/VideoChannelThumbnail";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { fetchChannelInfo, fetchRelatedVideos, fetchVideoDetails } from "../../utils/fetchFromApi";
import { useEffect, useState } from "react";

const WatchVideo = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState();
  const [channelDetails, setchannelDetails] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setVideoDetails(await fetchVideoDetails(id));
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      setchannelDetails(await fetchChannelInfo("id=" + videoDetails?.data?.channelId));
    };

    fetchData();
  }, [videoDetails]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = (await fetchRelatedVideos(id)).data;
      setRelatedVideos(data);
    };
    fetchData();
  }, [id]);

  console.log(relatedVideos);
  const { data } = videoDetails || {};

  return (
    <Feed showTags={false} sideBar={false}>
      <div className="video-container  w-[100vw] fixed justify-between flex left-0 top-0 mt-16 h-[100vh]  overflow-y-scroll">
        <div className=" min-w-[68vw] max-w-[68vw] h-auto pr-2 relative ">
          <VideoPlayer id={id} />
          <div className="w-11/12 pl-7 py-5 font-bold text-xl font-sans px-1 pb-10">
            <div>{data?.title}</div>
            <div className="flex gap-4  mt-4 relative" onClick={() => {}}>
              <VideoChannelThumbnail
                channelId={"as"}
                customChannelUrl={"/search/channel/" + data?.channelId}
                channelThumbnail={
                  channelDetails?.data?.meta?.thumbnail?.length > 0 &&
                  channelDetails?.data?.meta?.thumbnail[0]?.url
                }
              />

              <div className="grid relative">
                <h3 className="text-sm h-fit">{data?.channelTitle}</h3>
                <h3 className="text-[0.75rem] h-fit absolute top-4 whitespace-nowrap text-gray-400 font-normal">
                  {channelDetails?.data?.meta?.subscriberCount} Subscribers
                </h3>
              </div>

              <div className="bg-white text-sm  text-gray-800 p-2 px-4 absolute right-0 rounded-3xl   font-medium cursor-pointer hover:bg-gray-200 transition-all h-fit">
                Subscribe
              </div>
            </div>
            <div
              className={` ${
                isOpen ? "h-32" : ""
              } p-4 pt-6 rounded-lg mt-6 bg-[#1c1b1b] hover:shadow-xl hover:bg-[#252323] hover:cursor-pointer
              hover:shadow-blue-gray-900/90 mb-6 text-sm text-justify whitespace-pre-line relative  overflow-hidden
              text-gray-300 font-normal
              `}
            >
              <div
                className="h-[90%] overflow-hidden "
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {data?.description}
              </div>

              <button
                className="  rounded-md pb-2  min-h-2   w-full flex justify-start text-white"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                {!isOpen ? "Mostrar menos" : "...más"}
              </button>
            </div>
            <div className="border w-full    mb-10">klk</div>
          </div>
        </div>
        <div className=" w-full text-black rounded">klk</div>
      </div>
    </Feed>
  );
};

export default WatchVideo;
