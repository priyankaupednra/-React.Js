import React, { Component } from 'react'  
import './count.css'
export default class App extends Component { 
    constructor()
    {
        super() 
        this.state = {count : 0} 
    }
    handleIncrement = ()=>{
      this.setState({count:this.state.count+1})
    } 
    handleDecrement = ()=>{
      this.setState({count:this.state.count-1})
    } 
    handleReset = ()=>{
      this.setState({count:0})
    }
  render() {
    return (
      <div className='mainBlock'>
        <h1>{this.state.count}</h1> 
        <div className='btngroup'> 
            <button className='a' onClick={this.handleIncrement}>+Increment</button> 
            <button className='b' onClick={this.handleDecrement}>-Decrement</button> 
            <button onClick={this.handleReset}>Reset</button>
        </div>
      </div> 
    )
  }
}
