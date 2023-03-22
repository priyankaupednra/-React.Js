import React from 'react'

export const Formfunc = () => {
  return (
    <div>
        <label htmlFor="username">Username</label> <br/> 
        <input type="text" id = "Username"/> <br/>
        <label htmlFor="password">Password</label><br/> 
        <input type="text" id = "Password" /><br/>  
        <label htmlFor="email">Email</label> <br/>
        <input type="text" id = "Email"/> <br/>
        <button  onClick={(e)=>{ 
            e.preventDefault() 
            let username = document.getElementById("Username").value 
            let password = document.getElementById("Password").value  
            let email = document.getElementById("Email").value 
            console.log({username,password,email}) 


        }
        }>SUBMIT</button>
    
    </div>
  )
}
