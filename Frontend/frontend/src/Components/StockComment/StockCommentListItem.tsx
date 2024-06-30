import React from "react";
import { CommentGet } from "../../Models/Comment";

type Props = {
  comment: CommentGet;
};

const StockCommentListItem = ({ comment }: Props) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-4 ml-10  border w-230 rounded-sm  border-stroke align-middle bg-white py-2  focus:ring-0  focus:outline-none shadow-default  dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-xl font-semibold whitespace-nowrap truncate overflow-hidden">
              {comment.title}
            </p>
          </div>
          <p className="text-dark text-sm font-light">@{comment.createdBy}</p>
        </div>
      </div>
      <p className="-mt-4 text-gray-500">{comment.content}</p>
    </div>
  );
};

export default StockCommentListItem;
