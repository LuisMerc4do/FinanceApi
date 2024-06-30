import React, { useEffect, useState } from "react";
import StockCommentForm from "./StockCommentForm";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import { CommentGet } from "../../Models/Comment";
import { commentGetAPI, commentPostAPI } from "../../Services/CommentService";
import StockCommentList from "./StockCommentList";

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = (formData: CommentFormInputs) => {
    commentPostAPI(formData.title, formData.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment created successfully!");
          getComments();
        }
      })
      .catch((error) => {
        toast.warning(error.response?.data?.message || "An error occurred");
      });
  };

  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol)
      .then((res) => {
        setLoading(false);
        setComments(res);
      })
      .catch((error) => {
        setLoading(false);
        toast.warning(error.response?.data?.message || "An error occurred");
      });
  };

  return (
    <div className="flex flex-col">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4 className="ml-3 py-5 mb-2 text-xl font-bold text-black dark:text-white pl-7">
            Comments
          </h4>
          <StockCommentList comments={comments || []} />
        </>
      )}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;
