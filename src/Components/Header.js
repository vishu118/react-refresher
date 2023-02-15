

import React, { Component } from "react";
import Leftnavbar from "./Leftnavbar";
import Rightnavbar from "./Rightnavbar";




export default class Header extends Component {
  render() {
    return (
      <header className="container">
          <Leftnavbar />
          <Rightnavbar />
        </header>
    )
  }
}

