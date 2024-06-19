import React from "react";
import "./Card.css";
type Props = {};

const Card = (props: Props) => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <img
        src="https://logowik.com/content/uploads/images/dfx-finance8486.logowik.com.webp"
        alt="logo"
      ></img>
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
};

export default Card;
