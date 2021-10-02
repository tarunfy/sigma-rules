import React, { useEffect, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { isPlaying, toggle } = useContext(PlayerContext);

  return (
    <div id="play">
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 ml-4 cursor-pointer hover:stroke-primary transition-colors duration-300 ease-in-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          onClick={toggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 ml-4 hover:stroke-primary transition-colors duration-300 ease-in-out  cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          onClick={toggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </div>
  );
};

export default Player;
