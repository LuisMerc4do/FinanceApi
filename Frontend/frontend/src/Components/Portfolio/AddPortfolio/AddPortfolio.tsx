import React, { SyntheticEvent } from "react";

type Props = {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
};

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
      <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-10 "
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default AddPortfolio;
