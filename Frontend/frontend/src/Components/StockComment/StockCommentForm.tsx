import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type Props = {
  symbol: string;
  handleComment: (e: CommentFormInputs) => void;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const validation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});

const StockCommentForm = ({ symbol, handleComment }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormInputs>({ resolver: yupResolver(validation) });
  return (
    <form className="mt-4 ml-4" onSubmit={handleSubmit(handleComment)}>
      <input
        type="text"
        id="title"
        className="w-full py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:border-gray-200"
        placeholder="Title"
        {...register("title")}
      />
      {errors.title ? <p>{errors.title.message}</p> : ""}
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:border-gray-200">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={6}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:placeholder-gray-400"
          placeholder="Write a comment..."
          {...register("content")}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
      >
        Post comment
      </button>
    </form>
  );
};

export default StockCommentForm;
