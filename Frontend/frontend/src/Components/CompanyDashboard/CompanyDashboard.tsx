import React, { Children } from "react";
import { Outlet } from "react-router";

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="bg-white px-5 pt-6 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ">
      <div>
        <div>{children}</div>
        <div>{<Outlet context={ticker} />}</div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
