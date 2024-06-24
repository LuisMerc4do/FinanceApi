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
  const [comments, setComment] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = (e: CommentFormInputs) => {
    commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment created successfully!");
          getComments();
        }
      })
      .catch((e) => {
        toast.warning(e.response?.data?.message || "An error occurred");
      });
  };

  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol)
      .then((res) => {
        setLoading(false);
        setComment(res?.data!);
      })
      .catch((e) => {
        setLoading(false);
        toast.warning(e.response?.data?.message || "An error occurred");
      });
  };

  return (
    <div className="flex flex-col">
      {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;
