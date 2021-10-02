import React from "react";
import main from "../media/audios/Main.mp3";
import Player from "./Player";
function Navbar() {
  return (
    <div className=" flex justify-between items-center px-10 py-2">
      <div className="flex flex-col justify-center ">
        <a
          href="#"
          className="text-quaternary   uppercase font-sans font-bold tracking-wider text-3xl"
        >
          Sigma
        </a>
      </div>
      <div className="flex items-center ">
        <Player url={main} />
        <a
          href="#"
          className="text-quaternary ml-4 p-3 hover:text-tertiary transition-colors duration-300  font-sans font-medium text-lg"
        >
          Signup
        </a>
        <a
          href="#"
          className="text-quaternary ml-4 p-3 hover:text-tertiary transition-colors duration-300  font-sans font-medium text-lg"
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default Navbar;
