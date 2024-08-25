import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { CommentGet, CommentPost } from "../Models/Comment";

const api = "https://financeluisbackend.azurewebsites.net/FinanceApi/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
): Promise<CommentPost> => {
  try {
    const response = await axios.post<CommentPost>(`${api}${symbol}`, {
      title: title,
      content: content,
    });
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const commentGetAPI = async (symbol: string): Promise<CommentGet[]> => {
  try {
    const response = await axios.get<CommentGet[]>(`${api}?symbol=${symbol}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
