import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center  ">
      <h1 className="text-xl font-bold">Job Order Management</h1>
      
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-900 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/jobs">
            <li className="hidden sm:inline text-slate-900 hover:underline">
              Jobs
            </li>
          </Link>
          <Link to="/Sign_in">
            <li className="hidden sm:inline text-slate-900 hover:underline">
              Sign in
            </li>
          </Link>
          <Link to="/orders">
            <li className="hidden sm:inline text-slate-900 hover:underline">
              Orders
            </li>
          </Link>
          </ul>
     
    </nav>
  );
};

export default Navbar;
