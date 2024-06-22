import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://logomakerr.ai/uploads/output/2024/01/17/150c94def14e68f660e57a767b722501.jpg"
          alt="Company Logo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{searchResult.name}</h2>
        <p>
          ${searchResult.currency} ({searchResult.symbol})
        </p>
        <p>
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
        <div className="card-actions justify-end"></div>
      </div>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;
