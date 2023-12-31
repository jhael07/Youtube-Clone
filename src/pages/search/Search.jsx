/* eslint-disable react/no-children-prop */
import { useContext, useEffect, useState } from "react";
import { fetchVideoResults } from "../../utils/fetchFromApi";
import { context } from "../../context/ContextProvider";
import Feed from "../../components/common/Feed";
import VideosSearchResult from "../../components/Videos/search/VideosSearchResult";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useContext(context);

  useEffect(() => {
    const getVideos = async () => {
      const { data } = await fetchVideoResults(
        `search?part=snippet&query=${searchTerm}`
      );
      setVideos(data);
    };
    getVideos();
  }, [searchTerm]);

  return (
    <Feed showTags={false}>
      <div className=" mt-16 grid gapy-y-10">
        <VideosSearchResult videos={videos} w={"w-10/12"} description={true} />
      </div>
    </Feed>
  );
};

export default Search;
