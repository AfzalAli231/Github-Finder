import React, { Component } from "react";
import logo from "./logo.png";
import "./Loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo pag" alt="logo" />
          <p>Loading ...</p>
        </header>
      </div>
    );
  }
}

export default Loading;
