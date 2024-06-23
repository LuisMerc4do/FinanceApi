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
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Updates
                      <span className="badge badge-sm badge-warning">NEW</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      Stats
                      <span className="badge badge-xs badge-info"></span>
                    </a>
                  </li>
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
