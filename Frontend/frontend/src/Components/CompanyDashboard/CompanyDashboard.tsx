import React, { Children } from "react";
import { Outlet } from "react-router";

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="col-span-1shadow-default dark:border-strokedark  xl:col-span-4 mx-6 mt-6">
      <div>
        <div>{children}</div>

        <div className="bg-white  rounded-sm border border-stroke dark:border-strokedark mb-4">
          {<Outlet context={ticker} />}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
