import React from "react";
import Hero from "../../Components/Hero/Hero";
import LoginPage from "../LoginPage/LoginPage";
import { useAuth } from "../../Context/useAuth";
import { useLocation } from "react-router-dom";
import SearchPage from "../SearchPage/SearchPage";

interface Props {}

const HomePage = (props: Props) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? <SearchPage /> : <LoginPage />;
};

export default HomePage;
