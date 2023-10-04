/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import TagsHomeComponent from "./TagsHomeComponent/TagsHomeComponent";
import Navbar from "./navbar/Navbar";
import { useState, useContext } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { context } from "../context/ContextProvider";

const Feed = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { isLoading } = useContext(context);

  return (
    <div className="flex w-full">
      {isLoading && <LoadingScreen />}
      <div className=" w-full flex mx-auto">
        <div className="w-full sm:w-11/12 lg:ml-16 relative justify-center mx-auto ">
          <Navbar />
          <TagsHomeComponent
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {/* Here goes the video results 👇 */}
          <div className=" max-w-[150rem] mx-auto mb-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
