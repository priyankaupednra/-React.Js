import React from 'react' 
const Course = (props)=>{
    return(
        <div className = 'parentBlock'> 
        <div className = 'mainBlock'> 
        <img src={props.payload[0].studentphoto} alt="" /> 
        <h2>{props.payload[0].degree}</h2>
        <h2>{props.payload[0].studentName}</h2> 
        <h2>{props.payload[0].courseName}</h2> 
        <h2>{props.payload[0].duration}</h2>
        </div>

        </div>
    )
} 
export default Course ; 