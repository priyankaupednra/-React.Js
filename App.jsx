import React from 'react'  
import JSON from "./Userdata.json"
import  Course from './Course' 
import "./course.css"

const App = ()=>{
    return(
        <>
        <div>
            <Course payload = {JSON}/>
        </div>
        </>
    )
} 
export default App ;