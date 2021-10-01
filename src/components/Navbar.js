import React from "react";
function Navbar() {
  return (
    <div className=" flex justify-between items-center px-10 py-2">
      <div className="flex flex-col justify-center">
        <a
          href="#"
          className="text-quaternary hover:text-tertiary transition-colors duration-300 ease-in-out  uppercase font-sans font-bold tracking-wider text-3xl"
        >
          Sigma
        </a>
      </div>
      <div className="flex items-center ">
        <a
          href="#"
          className="ml-4 p-3 hover:text-tertiary transition-colors duration-300 text-quaternary font-sans font-medium text-lg"
        >
          Rules
        </a>
        <a
          href="#"
          className="ml-4 p-3 hover:text-tertiary transition-colors duration-300 text-quaternary font-sans font-medium text-lg"
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default Navbar;
