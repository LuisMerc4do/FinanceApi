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
    <>
      <h4 className="ml-3 pt-5 text-xl font-bold text-black dark:text-white pl-7">
        Post a new Comment!
      </h4>
      <form className="mt-6 ml-10 " onSubmit={handleSubmit(handleComment)}>
        <input
          type="text"
          id="title"
          className="w-150 rounded-sm border border-stroke align-middle bg-white py-2  focus:ring-0  focus:outline-none shadow-default mb-3 dark:border-strokedark dark:bg-boxdark sm:px-7.5 "
          placeholder="Title"
          {...register("title")}
        />
        {errors.title && <p>{errors.title.message}</p>}
        <div className="rounded-sm border  border-stroke bg-white px-5 py-4 shadow-default mb-6 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-7">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={6}
            className="px-0 w-230 font-normal text-gray-900 border-0 focus:ring-0 focus:outline-none dark:bg-boxdark"
            placeholder="Write a comment..."
            {...register("content")}
          ></textarea>
        </div>
        {errors.content && <p>{errors.content.message}</p>}
        <button
          type="submit"
          className="w-50  px-4 py-3 mb-6 text-white font-medium bg-primary text-center hover:bg-opacity-90 lg:px-2 xl:px-6 "
        >
          Post comment
        </button>
      </form>
    </>
  );
};

export default StockCommentForm;
