import { LoadingScreen } from "../../components/common/LoadingScreen";
import Navbar from "../../components/navbar/Navbar";
import "./channel.css";
import Banner from "./components/Banner";
import ChannelDetails from "./components/ChannelDetails";
import Divider from "../../components/common/Divider";
import ChannelTrailer from "./components/ChannelTrailer";
import useChannel from "./hooks/useChannel";

const Channel = () => {
  const { isLoading, videoDescription, banner, channelThumbnail, data } = useChannel();

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <div className=" w-full flex mx-auto">
        <div className="w-full lg:ml-20 relative justify-center mx-auto ">
          <Navbar showSideBar={true} />
          <div className="mt-12 min-h-screen">
            {/* 👇 CHANNEL BANNER  */}
            <Banner banner={banner} />
            {/* 👇 INFORMATION SUCH AS SUBSCRIBERS, DESCRIPTION, ETC.  */}
            <ChannelDetails
              data={data}
              channelThumbnail={channelThumbnail}
              channelDescription={videoDescription || "klk"}
            />
            <Divider />
            {/* 👇 FIRST VIDEO THAT APPEARS ON THE CHANNEL */}
            <ChannelTrailer data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
