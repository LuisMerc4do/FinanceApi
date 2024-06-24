import React, { Children } from "react";
import { Outlet } from "react-router";

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-10/12">
      <div className="relative pt-20 pb-32 bg-lightBlue-500">
        <div className="px-4 md:px-6 mx-auto">
          <div>
            <div className="flex flex-wrap">{children}</div>
            <div className="flex flex-wrap">{<Outlet context={ticker} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
