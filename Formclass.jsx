import React, { Component } from 'react'

export default class Formclass extends Component {
  render() {
    return (
      <div>
        <form action="">
            <label htmlFor="Username">Username</label><br/> 
            <input type="text" id = "Username"/><br/> 
            <label htmlFor="Password">Password</label> <br/>
            <input type="text" id = "Password" /><br/>  
            <button onClick={(e)=> {
            e.preventDefault() 
            let username = document.getElementById("Username").value 
            let password = document.getElementById("Password").value 
            console.log({username,password});
            }}>SUBMIT</button>
        </form>
      </div>
    )
  }
}

