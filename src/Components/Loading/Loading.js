import React from "react";
import logo from "./logo.png";
import "./Loading.css";

function Loading() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo pag" alt="logo" />
          <p>Loading ...</p>
        </header>
      </div>
    );
  }

export default Loading;
