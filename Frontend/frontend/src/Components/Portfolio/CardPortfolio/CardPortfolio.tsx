import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between rounded-[5px] px-7 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
        <div>
          <div className="h-10 w-10 rounded-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
              alt="brand"
            />
          </div>
          <Link to={`/company/${portfolioValue.symbol}/company-profile`}>
            <a className="text-m font-bold leading-6  text-black dark:text-white">
              {portfolioValue.symbol}
            </a>
          </Link>
          <p className="text-xs font-light">16 Shares</p>
        </div>

        <div className="text-right">
          <Link to={`/company/${portfolioValue.comments}/company-profile`}>
            <a className="mb-1 text-lg font-medium text-black dark:text-white">
              $ {portfolioValue.purchase}
            </a>
          </Link>
          <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
            $ {portfolioValue.lastDiv}
            <svg
              className="fill-current"
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                fill=""
              />
            </svg>
          </p>
        </div>
        <DeletePortfolio
          portfolioValue={portfolioValue.symbol}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
    </div>
  );
};

export default CardPortfolio;
