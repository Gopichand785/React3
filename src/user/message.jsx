import React, { Component } from 'react'

export class Message extends Component {
    state={
        Message:"hello"
    }
    MessageHandler=(Message)=>{
        this.setState({Message:Message})
    }
  render() {
    return (
      <div>
      <h2>Message:{this.state.Message}</h2>
    <button onClick={this.MessageHandler.bind(this, "gm")}>gm</button>
    <button onClick={this.MessageHandler.bind(this, "ga")}>ga</button>
    <button onClick={()=>{
        this.setState({Message:"good night going for dinner"})
    }
    }>gn</button>
      </div>
    )
  }
}

export default Message