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
    <>
      <div className="flex items-center gap-3 p-2.5 xl:p-5">
        <a href={`/company/${searchResult.symbol}/company-profile`}>
          {searchResult.name}
        </a>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <a href={`/company/${searchResult.symbol}/company-profile`}>
          ({searchResult.symbol})
        </a>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <a href={`/company/${searchResult.currency}/company-profile`}>
          {searchResult.currency}
        </a>
      </div>
      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <a href={`/company/${searchResult.exchangeShortName}/company-profile`}>
          {searchResult.exchangeShortName}
        </a>
      </div>

      <div className="" data-label="Actions">
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </div>
    </>
  );
};

export default Card;
