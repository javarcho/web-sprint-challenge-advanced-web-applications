import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/Login";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="http://localhost:3000/" onClick={logout}>logout</a>
        </header>
        <Route exact path="/" component={Login} />        
        <PrivateRoute exact path="/bubblepage" component={BubblePage} />
      </div>
    </Router>
  );
}

  export default App;