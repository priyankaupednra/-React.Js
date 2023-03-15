import React,{Component} from "react"; 
import JSON  from  './User.json' 
import Users from './Users.jsx' 
export default class App extends Component {

 constructor() {
    super()  
    this.state = {json:JSON}
 }  
 render(){
    return(
        <div>
            <Users data = {this.state.json}/>
        </div>
    )
 }
} 


    
