//  UNDERSTAND THIS --> https://reactjs.org/docs/state-and-lifecycle.html

// import the package we have made
import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Login from "./Pages/Login";
import reportWebVitals from "./reportWebVitals";



  ReactDOM.render(
    <React.Fragment>
      <Login />
    </React.Fragment>,
    document.getElementById("root")
  );
/*
    
 */

//<App />
// {/* element, document.getElementById('root'); */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
