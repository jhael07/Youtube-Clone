/* eslint-disable react/prop-types */
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

export const CommentsComponent = ({ commentArray }) => {
  return (
    <>
      {commentArray?.map((comments) => {
        return (
          <div className="flex gap-2 mb-4 " key={comments?.commentId}>
            <div className=" w-16  rounded-full h-14 overflow-hidden">
              <img src={comments?.authorProfileImageUrl[2]?.url} alt="" />
            </div>
            <div className="w-full p-1">
              <div className="text-sm font-medium">
                {comments?.authorDisplayName}
                <span className="ml-2 text-xs text-gray-400">{comments?.publishedTimeText}</span>
              </div>
              <div className="comment">{comments?.textDisplay}</div>
              <div className="likes">
                <AiOutlineLike />
                <AiOutlineDislike />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
