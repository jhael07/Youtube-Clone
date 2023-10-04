/* eslint-disable react/prop-types */
export const VideoDetails = ({ videoTitle, channelName, views, publishedDate }) => (
  <div className="w-fit pr-1">
    <h2 className="whitespace-break-spaces ">
      {videoTitle?.length > 67 ? videoTitle.substring(0, 67) + "..." : videoTitle}
    </h2>
    <h6 className="text-sm mt-2  text-gray-400">{channelName}</h6>
    <div className="flex gap-2 mt-[-.4rem]">
      <h6 className="text-sm mt-2 text-gray-400">
        {views}
        Views
      </h6>
      <h6 className="text-sm mt-2 text-gray-400">{publishedDate}</h6>
    </div>
  </div>
);
