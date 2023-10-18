/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */

import Feed from "../../components/common/Feed";
import VideosGrid from "../../components/Videos/common/VideosGrid";
import { useHome } from "./hooks/useHome";
import "./home.css";

const Home = () => {
  const { videos } = useHome();

  return (
    <Feed
      children={
        <div className="video-container">
          <VideosGrid videos={videos} />
        </div>
      }
    />
  );
};

export default Home;
