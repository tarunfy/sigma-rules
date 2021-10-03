import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { PlayerContextProvider } from "./context/PlayerContext";
import { AuthContextProvider } from "./context/AuthContext";
import AppRouter from "./components/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlayerContextProvider>
        <AppRouter />
      </PlayerContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
