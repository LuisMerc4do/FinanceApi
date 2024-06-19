import React from "react";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://logomakerr.ai/uploads/output/2024/01/17/150c94def14e68f660e57a767b722501.jpg"
          alt="Cards"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{companyName}</h2>
        <p>
          {price} ({ticker})
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
