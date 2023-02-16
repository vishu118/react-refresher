




import React, { Component } from 'react'

export default class Leftnavbar extends Component {
  render() {

    let handleClicked = ()=>{
       
    }
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
        <button className=" left" >Sign Up</button>
      </div>
      <div className="rightbtns">
          <i className="fa-solid fa-circle-half-stroke"></i>
          <i className="fa-solid fa-earth-americas"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <button className="pro right">Pro</button>
          <button className="certified right">Get Certified</button>
          <button className="Website right">Create Website</button>
          <button  className="log_in right" onClick={handleClicked}> Log in</button>
        </div>
    </>
    )
  }
}
