import React, { Component } from 'react'

 class Ram extends React. Component {
    message="hello";
    gmHandler=()=>{
     this.message="good moring"
     console.log(this.message)

    }
  render() {
    return (
      <div>
        <h1>Message Component</h1>
        <h3>message:{this.message}</h3>
        <button onClick={this.gmHandler()}>Gm</button>
        <button>Gn</button>
      </div>
    )
  }
}

export default Ram