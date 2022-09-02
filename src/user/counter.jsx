import React, { Component } from 'react'
 class Counter extends React.Component {
    state={
        qty:1
    }
    incerHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    decerHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    
  render() {
    return (
      <div>
    <h3>qty:{this.state.qty}</h3>
    <button onClick={this.incerHandler}>incer</button>
    <button onClick={this.decerHandler}>decer</button>
      </div>
    )
  }
}

export default Counter