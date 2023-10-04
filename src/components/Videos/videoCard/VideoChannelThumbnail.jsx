/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const VideoChannelThumbnail = ({ channelThumbnail, channelId }) => (
  <Link className={`rounded-full h-12 w-12 mt-1`} to={`channel/${channelId}`}>
    <img src={channelThumbnail} className=" rounded-full" />
  </Link>
);
