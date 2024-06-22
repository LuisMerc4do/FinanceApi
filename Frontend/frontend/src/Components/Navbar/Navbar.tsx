import React from "react";
import logo from "./logo.png";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a>Account</a>
              <ul className="p-2">
                <li>
                  <a href="/account">Profile</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl ">
          FinanceAPP
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Search</a>
          </li>
          <li>
            <details>
              <summary>Account</summary>
              <ul className="p-2">
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end p-1">
        <a className="btn btn-primary btn-xs sm:btn-sm md:btn-md">Sign Up</a>
      </div>
      <button className="btn glass btn btn-xs sm:btn-sm md:btn-md">
        Log In
      </button>
    </div>
  );
};

export default Navbar;
