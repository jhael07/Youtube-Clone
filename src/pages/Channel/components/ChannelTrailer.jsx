/* eslint-disable react/prop-types */
import { VideoThumbnail } from "../../../components/Videos/videoCard/VideoThumbnail";

const ChannelTrailer = ({ data }) => {
  return (
    <div className="sm:flex w-11/12 mx-auto gap-4 ">
      <div className="md:w-96">
        <VideoThumbnail
          thumbnail={data?.data[1].thumbnail[3].url}
          videoId={data?.data[1]?.videoId}
          videoDetails={data?.data[1]}
        />
      </div>
      <div className="mt-6 md:w-7/12">
        <h2 className="whitespace-break-spaces">{data?.data[1].title}</h2>
        <div className="flex gap-2 mt-[.2rem]">
          <h6 className="text-sm mt-2 text-gray-400">
            {Number(data?.data[1].viewCount).toLocaleString()} Views
          </h6>
          <h6 className="text-sm mt-2 text-gray-400">
            {data?.data[1].publishedText}
          </h6>
        </div>
        <h2 className="mt-6 text-sm leading-6">{data?.data[1].description}</h2>
      </div>
    </div>
  );
};

export default ChannelTrailer;
