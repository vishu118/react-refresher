import React, { Component } from 'react'
import "./index.css"

export default class Login extends Component {
 constructor(props){
    super(props)
    this.state = {
        email : "",
        password : "",
        name : "KATTAZERO",
        h1 : ""
    }
 }
 handleChange = (event)=>{
    this.setState({
        name : event.target.value
    })
}
 handelEmail = (event)=>{
    this.setState({
        email : event.target.value
    })
 }
 handelPassword = (event)=>{
    this.setState({
        password : event.target.value
    })
 }

 submit = (e)=>{
    e.preventDefault();
    alert("Form Submitted")
    this.setState({
        h1 : `Hello ${this.state.email}`
    })
  this.setState({
    email : "",
    password : ""
  })
  
 
 }
 
  render() {
    return (
      <div className='App'>
        <form onSubmit={this.submit}>
        <label for="Email"> Email  </label>
            <input type="text" placeholder='Enter Your Email...' name ='Email' required={this.state.value} value={this.state.email} onChange={this.handelEmail} ></input><br></br>
        <label for="Password">Password  </label>
            <input type="password" placeholder='Enter The Password' name ='Password' value={this.state.password} onChange={this.handelPassword}></input> <br></br>

            <button type='submit' onSubmit={this.submit}>Submit</button>
        </form>

        <h1>{this.state.h1}</h1>

       <input type="text" onChange = {this.handleChange} value = {this.state.name}></input>

       <h1>{this.state.name}</h1>

      </div>
    )
  }
}
