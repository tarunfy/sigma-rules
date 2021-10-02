import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { PlayerContextProvider } from "./context/PlayerContext";

ReactDOM.render(
  <React.StrictMode>
    <PlayerContextProvider text="My root PCP has printed">
      <BrowserRouter>
        <App />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </PlayerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
