




import React, { Component } from 'react'

export default class Leftnavbar extends Component {
  render() {
    return (
      <>
      <div className="leftbtns">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png"
          alt="logo"
          className="image"
        />
        <button className=" left">Tutorials</button>
        <button className=" left">References</button>
        <button className=" left">Exercises</button>
        <button className=" left">Sign Up</button>
      </div>
    </>
    )
  }
}
