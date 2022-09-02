import React, { Component } from 'react'
 class Jan  extends React. Component {
    state={
        message:"hello"
    }
    gmHandler=(event)=>{
      console.log(event)
        this.setState({message:"hello,good morning"})
    }
    gnHandler=()=>{
        this.setState({
            message:"hello,good evening"
        })
    }
  render() {
    return (
      <>
      <h3>message Component</h3>
      <h3>message:{this.state.message}</h3>
      <button onClick={this.gmHandler}>GM</button>
      <button onClick={this.gnHandler}>GN</button>

      </>
    )
  }
}

export default Jan