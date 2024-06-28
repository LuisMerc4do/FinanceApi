import React, { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface ListPortfolioProps {
  portfolioValues: PortfolioGet[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio: React.FC<ListPortfolioProps> = ({
  portfolioValues,
  onPortfolioDelete,
}) => {
  return (
    <div className="object-top md:grid-cols-1">
      <div className="col-span-1 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
        <h4 className="py-5 b-6 text-xl font-bold text-black dark:text-white pl-7">
          My Portfolio
        </h4>

        <>
          {portfolioValues.length > 0 ? (
            portfolioValues.map((portfolioValue) => {
              return (
                <CardPortfolio
                  key={portfolioValue.id} // Ensure each child has a unique key prop
                  portfolioValue={portfolioValue}
                  onPortfolioDelete={onPortfolioDelete}
                />
              );
            })
          ) : (
            <h2 className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row text-center md:text-xl">
              Your portfolio is empty.
            </h2>
          )}
        </>
      </div>
    </div>
  );
};

export default ListPortfolio;
