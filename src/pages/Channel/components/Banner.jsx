/* eslint-disable react/prop-types */
const Banner = ({ banner }) => {
  return (
    <div className="banner-container">
      {banner ? <img src={banner} className="object-cover w-full h-full " /> : null}
    </div>
  );
};

export default Banner;
