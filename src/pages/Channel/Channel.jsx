import { useParams } from "react-router-dom";
import { LoadingScreen } from "../../components/LoadingScreen";
import { context } from "../../context/ContextProvider";
import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { fetchChannelInfo } from "../../utils/fetchFromApi";
import { useGetData } from "../../hooks/getData";
import "./channel.css";
import { VideoThumbnail } from "../../components/Videos/videoCard/VideoThumbnail";

const Channel = () => {
  const { channelId } = useParams();
  const { isLoading } = useContext(context);

  const { data } = useGetData({ getDataFunction: fetchChannelInfo, query: `id=${channelId}` });

  const banner = data?.meta?.image?.banner[4]?.url;
  const channelThumbnail = data?.meta?.thumbnail[2]?.url;

  console.log(data);
  const channelDescription =
    data?.meta?.description.length > 70
      ? data?.meta?.description.substring(0, 70) + "..."
      : data?.meta?.description;

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <div className=" w-full flex mx-auto">
        <div className="w-full lg:ml-20 relative justify-center mx-auto ">
          <Navbar showSideBar={true} />
          <div className="mt-12 bg-[#111111]">
            {/* BANNER */}
            <div className="banner-container">
              {banner ? <img src={banner} className="object-cover w-full h-full " /> : null}
            </div>
            {/* CHANNEL DETAILS */}
            <div className=" grid sm:flex sm:justify-between lg:w-full items-center w-11/12 mx-auto  ">
              <div className="grid place-items-center sm:flex gap-4 mx-auto  max-w-[96rem]  w-full">
                <div className="profile-thumbnail">
                  {channelThumbnail ? (
                    <img
                      src={channelThumbnail}
                      className="object-cover w-full h-full rounded-full"
                    />
                  ) : null}
                </div>

                <div className=" h-32 lg:mt-4 p-3 grid relative  lg:w-72">
                  <h1 className="text-2xl font-normal h-fit text-gray-300 mx-auto sm:mx-0">
                    {data?.meta?.title}
                  </h1>

                  <p className="absolute bottom-14 md:ml-3 ml-32 text-sm text-zinc-500 mx-auto ">
                    {data?.meta?.subscriberCount} subscribers
                  </p>
                  <p className="sm:min-w-max mt-10 text-zinc-400 text-sm">{channelDescription}</p>
                </div>
              </div>
              <div className="grid place-items-center justify-center mt-2 sm:mt-12">
                <div className="bg-white text-gray-800 px-4 py-2 rounded-3xl lg:mr-20  font-medium cursor-pointer hover:bg-gray-200 transition-all">
                  Subscribe
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-11/12 mx-auto  md:mb-4 mt-6 bg-gray-500 h-[0.06rem]"></div>

            <div className="sm:flex w-11/12 mx-auto gap-4 ">
              <div className="w-96">
                <VideoThumbnail
                  thumbnail={data?.data[1].thumbnail[3].url}
                  videoId={data?.data[1]?.videoId}
                />
              </div>
              <div className="mt-4 w-7/12">
                <h2 className="whitespace-break-spaces ">{data?.data[1].title}</h2>
                <div className="flex gap-2 mt-[.2rem]">
                  <h6 className="text-sm mt-2 text-gray-400">
                    {Number(data?.data[1].viewCount).toLocaleString()} Views
                  </h6>
                  <h6 className="text-sm mt-2 text-gray-400">{data?.data[1].publishedText}</h6>
                </div>
                <h2 className="mt-6 text-sm leading-6">{data?.data[1].description}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
