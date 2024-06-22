import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { Result } from "postcss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <>
      <div>
        {searchResults.length > 0 ? (
          searchResults.map((result) => {
            return (
              <Card
                id={result.symbol}
                key={uuidv4()}
                searchResult={result}
                onPortfolioCreate={onPortfolioCreate}
              />
            );
          })
        ) : (
          <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
            No Results!
          </h3>
        )}
      </div>
    </>
  );
};

export default CardList;
