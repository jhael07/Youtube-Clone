import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../../context/ContextProvider";
import { fetchChannelInfo } from "../../../utils/fetchFromApi";
import { useGetData } from "../../../hooks/getData";

const useChannel = () => {
  const { channelId } = useParams();
  const { isLoading } = useContext(context);
  const { data } = useGetData({
    getDataFunction: fetchChannelInfo,
    query: `id=${channelId}`,
  });

  const [videoDescription, setVideoDescription] = useState("");

  const banner = data?.meta?.image?.banner[4]?.url,
    channelThumbnail = data?.meta?.thumbnail[2]?.url;

  useEffect(() => {
    const descriptionLength = data?.meta?.description.length,
      description = data?.meta?.description;

    setVideoDescription(
      descriptionLength > 70
        ? description.substring(0, 70) + "..."
        : description
    );
  }, [data]);

  return { isLoading, videoDescription, banner, channelThumbnail, data };
};

export default useChannel;
