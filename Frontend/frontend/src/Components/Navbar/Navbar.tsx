import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
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
              <Link to="/search">
                <a href="/search">Search</a>
              </Link>
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Yahoo%21_Finance_logo_2021.png/1200px-Yahoo%21_Finance_logo_2021.png"
            width={150}
            className="mx-auto"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/search">
              <a>Search</a>
            </Link>
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
            <a>Updates</a>
          </li>
        </ul>
      </div>

      {isLoggedIn() ? (
        <>
          <div className="navbar-end p-1">
            <Link to="/">
              <div className="avatar online placeholder">
                <div className="bg-neutral text-neutral-content w-10 rounded-full">
                  <span className="text-xl">{user?.userName.charAt(0)}</span>
                </div>
              </div>
            </Link>
          </div>
          <a onClick={logout}>
            <button className="btn glass btn-xs sm:btn-sm md:btn-md">
              Logout
            </button>
          </a>
        </>
      ) : (
        <>
          <div className="navbar-end p-1">
            <Link to="/signup">
              <a className="btn btn-primary btn-xs sm:btn-sm md:btn-md">
                Sign Up
              </a>
            </Link>
          </div>
          <Link to="/login">
            <button className="btn glass btn-xs sm:btn-sm md:btn-md">
              Log In
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
