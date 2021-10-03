import React, { createContext, useEffect, useState } from "react";
import main from "../media/audios/Main.mp3";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [audio] = useState(new Audio(main));

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [audio]);

  return (
    <PlayerContext.Provider
      value={{ isPlaying, toggle: () => setIsPlaying((p) => !p) }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
