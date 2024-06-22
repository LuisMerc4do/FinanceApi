import React from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../company";
import { Result } from "postcss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card id={result.symbol} key={uuidv4()} searchResult={result} />
          );
        })
      ) : (
        <h1>No Result</h1>
      )}
      ;
    </div>
  );
};

export default CardList;
