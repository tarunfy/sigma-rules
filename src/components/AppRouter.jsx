import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Signup from "../pages/Signup";
import Rings from "../media/imgs/rings.svg";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import App from "../App";

const AppRouter = () => {
  const { user, isFetching } = useContext(AuthContext);

  if (isFetching)
    return <img className="h-screen w-screen" src={Rings} alt="loading" />;

  const isAuthenticated = user != null;
  return (
    <BrowserRouter>
      <App />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/signup"
          render={(props) =>
            !isAuthenticated ? <Signup {...props} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/login"
          render={(props) =>
            !isAuthenticated ? <Login {...props} /> : <Redirect to="/" />
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
