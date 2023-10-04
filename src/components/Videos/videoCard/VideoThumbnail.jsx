/* eslint-disable react/prop-types */
export const VideoThumbnail = ({ thumbnail }) => (
  <div className={`h-fit w-full mx-auto bg-inherit mt-6 `}>
    <img src={thumbnail} className={`rounded-lg object-fit h-full w-full`} />
  </div>
);
