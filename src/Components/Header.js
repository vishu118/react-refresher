import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Header extends Component {
  render() {
    return (
      <header className="container">
        <Navbar />
      </header>
    );
  }
}
