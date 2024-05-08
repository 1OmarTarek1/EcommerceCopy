import { Home } from "./pages/Home/Home.js";

import React, { useEffect, useState } from "react";
import { Login } from "./auth/Login.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { UserHome, AdminHome } from "./pages";
import NavSec from "./Sections/NavSec/NavSec.jsx";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
  }, [isAuthenticated]);

  return (
    <Router>
      <NavSec
        setIsAuthenticated={setIsAuthenticated}
        isAuthenticated={isAuthenticated}
      />
      <div className="WebsiteContainer">
        <Switch>
          <Route path="/" exact>
            {isAuthenticated ? (
              localStorage.getItem("type") === "admin" ? (
                <Redirect to="/AdminHome" />
              ) : (
                <Redirect to="/products" />
              )
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )}
          </Route>
          <Route path="/AdminHome">
            {isAuthenticated && localStorage.getItem("type") === "admin" ? (
              <AdminHome setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/products">
            {isAuthenticated ? (
              <Home setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/UserHome">
            {isAuthenticated ? (
              <UserHome setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
