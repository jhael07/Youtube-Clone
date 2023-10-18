import Feed from "../../components/common/Feed";
import { VideoChannelThumbnail } from "../../components/Videos/videoCard/VideoChannelThumbnail";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { context } from "../../context/ContextProvider";
import VideoPlayer from "./VideoPlayer";

const WatchVideo = () => {
  const { id } = useParams();
  const { watchVideoTitle } = useContext(context);

  return (
    <Feed showTags={false} sideBar={false}>
      <div className="video-container  w-[100vw] fixed justify-between flex left-0 top-0 mt-16 h-[100vh]  overflow-y-scroll">
        <div className=" min-w-[70vw] h-auto pr-2 ">
          <VideoPlayer id={id} />
          <div className="w-11/12 mx-auto py-5 font-bold text-xl font-sans px-1">
            <div>{watchVideoTitle}</div>
            <div className="flex gap-4  mt-4 relative" onClick={() => {}}>
              <VideoChannelThumbnail
                channelId={"as"}
                customChannelUrl={"/search/channel/" + 18}
                channelThumbnail={
                  "https://yt3.googleusercontent.com/8oMzoXvdLZXiRf3gYT2cO902QsIOxBL8yUv6yWBvWnsg80O8G9Pk-BUAhu7n1VcFS-02EBo0-w=s176-c-k-c0x00ffffff-no-rj"
                }
              />

              <div className="grid relative">
                <h3 className="text-sm h-fit">Channel Title</h3>
                <h3 className="text-[0.75rem] h-fit absolute top-4 whitespace-nowrap text-gray-400 font-normal">
                  8.4M Subscribers
                </h3>
              </div>

              <div className="bg-white text-sm  text-gray-800 p-2 px-4 absolute right-0 rounded-3xl   font-medium cursor-pointer hover:bg-gray-200 transition-all h-fit">
                Subscribe
              </div>
            </div>
            <div className="border h-20 p-4 rounded-lg mt-4 mb-20">Description</div>
            <div className="border w-full p-4 ">klk</div>
            <div className="border w-full p-4 ">klk</div>
            <div className="border w-full p-4 mb-20 ">klk</div>
          </div>
        </div>
        <div className=" w-full text-black rounded">klk</div>
      </div>
    </Feed>
  );
};

export default WatchVideo;
