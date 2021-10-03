import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center lg:px-10  py-2 px-3">
      <div className="flex flex-col justify-center ">
        <Link
          href="#"
          className="text-quaternary uppercase font-Montserrat font-bold tracking-wider text-3xl"
          to="/"
        >
          Sigma
        </Link>
      </div>
      <div className="flex items-center ">
        <Link
          href="#"
          className="text-quaternary lg:ml-4 lg:p-3 hover:text-tertiary transition-colors duration-300  font-sans font-medium text-lg p-2"
          to="/signup"
        >
          Signup
        </Link>
        <Link
          href="#"
          className="text-quaternary lg:ml-4 lg:p-3 hover:text-tertiary transition-colors duration-300  font-sans font-medium text-lg p-2"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
