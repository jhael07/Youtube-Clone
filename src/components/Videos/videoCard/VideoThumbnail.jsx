import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
export const VideoThumbnail = ({ thumbnail, videoId }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`h-fit w-full mx-auto bg-inherit mt-6 `}
      onClick={() => {
        navigate("search/channel/" + videoId);
      }}
    >
      <img src={thumbnail} className={`rounded-lg object-fit h-full w-full`} />
    </div>
  );
};
