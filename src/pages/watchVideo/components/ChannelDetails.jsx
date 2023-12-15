/* eslint-disable react/prop-types */
export const ChannelDetails = ({ channelTitle, subscriberCount }) => {
  return (
    <div className="grid relative">
      <h3 className="text-sm h-fit">{channelTitle}</h3>
      <h3 className="text-[0.75rem] h-fit absolute top-4 whitespace-nowrap text-gray-400 font-normal">
        {subscriberCount} Subscribers
      </h3>
    </div>
  );
};
