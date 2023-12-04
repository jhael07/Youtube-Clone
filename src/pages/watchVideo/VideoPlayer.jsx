/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

const VideoPlayer = ({ id }) => {
  return (
    <div className=" h-[30rem] w-11/12 ml-6 mx-auto rounded-2xl overflow-hidden mt-2">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        playing={true}
        controls={true}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default VideoPlayer;
