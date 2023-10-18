import { useContext } from "react";
import { context } from "../context/ContextProvider";

const useVideoDetails = () => {
  const { setWatchVideoTitle } = useContext(context);
  const handleVideoTitle = (title) => {
    setWatchVideoTitle(title);
  };

  return { handleVideoTitle };
};

export default useVideoDetails;
