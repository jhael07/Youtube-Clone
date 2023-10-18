/* eslint-disable react-hooks/exhaustive-deps */
import { fetchVideoResults } from "../../../utils/fetchFromApi";
import { useEffect } from "react";
import { context } from "../../../context/ContextProvider";
import { useState, useContext } from "react";

export const useHome = () => {
  const [videos, setVideos] = useState([]);
  const { setIsLoading, selectedCategory } = useContext(context);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await fetchVideoResults(`search?part=snippet&query=${selectedCategory}`);
      setVideos(data);
      setIsLoading(false);
    };
    getData();
  }, [selectedCategory]);

  return { videos };
};
