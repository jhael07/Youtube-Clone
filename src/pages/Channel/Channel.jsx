import { useParams } from "react-router-dom";
import { LoadingScreen } from "../../components/LoadingScreen";
import { context } from "../../context/ContextProvider";
import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { fetchChannelInfo } from "../../utils/fetchFromApi";
import { useGetData } from "../../hooks/getData";

const Channel = () => {
  const { channelId } = useParams();
  const { isLoading } = useContext(context);

  const { data } = useGetData({ getDataFunction: fetchChannelInfo, query: `id=${channelId}` });

  return (
    <div>
      <div className=" w-full flex mx-auto">
        <div className="w-full lg:ml-20 relative justify-center mx-auto ">
          <Navbar showSideBar={true} />
          {isLoading && <LoadingScreen />}
          <div className="mt-12 bg-[#111111]">
            <div className="bg-white  bg-no-repeat bg-cover h-44 md:h-auto w-full ">
              {data?.meta?.image?.banner[4]?.url ? (
                <img
                  src={data?.meta?.image?.banner[4]?.url}
                  className="object-cover w-full h-full "
                />
              ) : (
                <div></div>
              )}
            </div>

            <div className="flex gap-4 mx-auto  max-w-[96rem]">
              <div className="rounded-full h-32 w-32  sm:ml-24 mt-4">
                {data?.meta?.thumbnail[2]?.url ? (
                  <img
                    src={data?.meta?.thumbnail[2]?.url}
                    className="object-cover w-full h-full rounded-full"
                  />
                ) : null}
              </div>

              <div className=" h-32 mt-4 p-3 grid relative w-60">
                <h1 className="text-2xl font-normal h-fit text-gray-300">{data?.meta?.title}</h1>
                <p className="absolute bottom-14 ml-3 text-sm text-zinc-500">
                  {data?.meta?.subscriberCount} subscribers
                </p>
                <p className="min-w-max mt-10 text-zinc-400 text-sm">
                  {data?.meta?.description.length > 70
                    ? data?.meta?.description.substring(0, 70) + "..."
                    : data?.meta?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
