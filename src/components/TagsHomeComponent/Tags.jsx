/* eslint-disable react/prop-types */
import { useContext } from "react";
import { context } from "../../context/ContextProvider";

const Tags = ({ setter, selected }) => {
  const { setSelectedCategory, selectedCategory } = useContext(context);
  return (
    <div className="mt-3.5 flex  gap-3 overflow-x-auto tags scroll-smooth" id="slider">
      {[
        "All",
        "Javascript",
        "Sports",
        "Entertaiment",
        "Hollywood  ",
        "Music",
        "Podcast",
        "Theories",
        "VideoGames",
        "News for you",
        "News for you",
        "News for you",
        "News",
      ].map((tag, i) => (
        <div
          key={i}
          onClick={() => {
            setSelectedCategory(tag);
            setter(tag);
          }}
          className={`${
            selectedCategory === tag ? "bg-gray-200 text-gray-800" : "bg-tundora"
          } rounded-md    py-1.5 px-3.5 outline-none w-fit whitespace-nowrap break-keep h-fit text-sm font-normal scroll-smooth`}
        >
          <TagButton id={i} title={tag} active={selected} />
        </div>
      ))}
    </div>
  );
};

export default Tags;

const TagButton = ({ title, id }) => {
  return (
    <button className="" key={id}>
      {title}
    </button>
  );
};
