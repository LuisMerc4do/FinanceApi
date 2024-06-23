import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <nav className="block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
        <button className="md:hidden flex items-center justify-center cursor-pointer text-blueGray-700 w-6 h-10 border-l-0 border-r border-t border-b border-blueGray-100 text-xl leading-none bg-white rounded-r border border-solid border-transparent absolute top-1/2 -right-24-px focus:outline-none z-9998">
          <i className="fas fa-ellipsis-v"></i>
        </button>

        <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
          <div className="flex bg-white flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 flex-1 rounded w-full">
            <div className="md:flex-col md:min-w-full flex flex-col list-none">
              <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                  <li>
                    <Link to="company-profile">
                      Company Profile
                      <span className="badge badge-xs badge-error"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="income-statement">
                      Income Statement
                      <span className="badge badge-xs badge-warning"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="balance-sheet">
                      Balance Sheet
                      <span className="badge badge-xs badge-warning"></span>
                    </Link>
                  </li>

                  <li>
                    <Link to="cashflow-statement">
                      Cashflow Statement
                      <span className="badge badge-xs badge-warning"></span>
                    </Link>
                  </li>
                </ul>
              </h6>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
