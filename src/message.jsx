import React, { Component } from 'react'
 class Message extends React.Component {
    name="gopi"
    salary=50000
    email="bgopichand3@gmail.com"
    role="frontend developer"
  render() {
    return (
      <div>
    <pre>{JSON.stringify(this.props)}</pre>
    <hr/>
    <h3>Employee name:{this.name}</h3>
    <h3>salary:{this.salary}</h3>
    <h3>email:{this.email}</h3>
    <h3>role:{this.role}</h3>

      </div>
    )
  }
}

export default Message