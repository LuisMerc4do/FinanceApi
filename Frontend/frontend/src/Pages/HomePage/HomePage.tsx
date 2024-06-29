import React from "react";
import Hero from "../../Components/Hero/Hero";
import LoginPage from "../LoginPage/LoginPage";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default HomePage;
