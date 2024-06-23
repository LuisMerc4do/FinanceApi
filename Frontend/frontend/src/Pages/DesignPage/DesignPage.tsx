import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";

type Props = {};

const DesingPage = (props: Props) => {
  return (
    <>
      <h1>FinanceAPP Design Page</h1>
      <h2>This is where we well test various designs aspects of the app</h2>
      <RatioList />
      <Table />
    </>
  );
};

export default DesingPage;
