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
      <th className="py-2 px-4" data-label="ID">
        <a href={`/company/${searchResult.symbol}/company-profile`}>{id}</a>
      </th>
      <td className="py-2 px-4" data-label="Name">
        <a href={`/company/${searchResult.symbol}/company-profile`}>
          {searchResult.name}
        </a>
      </td>
      <td className="py-2 px-6" data-label="Symbol">
        <a href={`/company/${searchResult.symbol}/company-profile`}>
          ({searchResult.symbol})
        </a>
      </td>
      <td className="py-2 px-4" data-label="Currency">
        <a href={`/company/${searchResult.symbol}/company-profile`}>
          {searchResult.currency}
        </a>
      </td>
      <td className="py-2 px-6" data-label="Exchange">
        <a href={`/company/${searchResult.symbol}/company-profile`}>
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </a>
      </td>
      <td className="py-2 px-4" data-label="Actions">
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </td>
    </>
  );
};

export default Card;
