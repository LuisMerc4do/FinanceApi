import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";
import ChartOne from "../../Components/RatioList/ChartOne";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);
  return (
    <>
      {company ? (
        <main>
          <CompanyDashboard ticker={ticker!}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 ">
              <Tile title="Company Name" subTitle={company.companyName} />
              <Tile title="Price" subTitle={"$" + company.price.toString()} />
              <Tile title="DCF" subTitle={"$" + company.dcf.toString()} />
              <Tile title="Sector" subTitle={company.sector} />
            </div>

            {/*<CompFinder ticker={company.symbol} />
            <TenKFinder ticker={company.symbol} />*/}
            <div className="rounded-sm border font-normal mb-6 border-stroke bg-white px-5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6">
              <a className=" pb-6">{company.description}</a>
            </div>
            <div className="mb-10">
              <ChartOne />
            </div>
          </CompanyDashboard>
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
