/* eslint-disable react/prop-types */
const ChannelDetails = ({ data, channelThumbnail, channelDescription }) => {
  return (
    <div className=" grid sm:flex sm:justify-between lg:w-full items-center w-11/12 mx-auto  ">
      <div className="grid place-items-center sm:flex gap-4 mx-auto  max-w-[96rem]  w-full">
        <div className="profile-thumbnail">
          {channelThumbnail ? (
            <img src={channelThumbnail} className="object-cover w-full h-full rounded-full" />
          ) : null}
        </div>

        <div className=" h-32 lg:mt-4 p-3 grid relative  lg:w-72">
          <h1 className="text-2xl font-normal h-fit text-gray-300 mx-auto sm:mx-0">
            {data?.meta?.title}
          </h1>

          <p className="absolute bottom-14 md:ml-3 ml-32 text-sm text-zinc-500 mx-auto ">
            {data?.meta?.subscriberCount} subscribers
          </p>
          <p className="sm:min-w-max mt-10 text-zinc-400 text-sm">{channelDescription}</p>
        </div>
      </div>
      <div className="grid place-items-center justify-center mt-2 sm:mt-12">
        <div className="subcribe-btn">Subscribe</div>
      </div>
    </div>
  );
};

export default ChannelDetails;
