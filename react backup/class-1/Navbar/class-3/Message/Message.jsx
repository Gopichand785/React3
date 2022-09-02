import React, { Component } from 'react'

 class Message extends React. Component {
    ename="Rahul"
    sal=50000
    emp={id:101,salary:6000}
  render() {
   
    return (
      <div>
      <h1> Message</h1>
      <hr/> 
      <h3>employee:{this.ename}</h3>  
      <h3>empid:{this.emp.id} </h3><h3>salary:{this.emp.salary}</h3>

<h4> salary:{this.sal}</h4>  
</div>
    )
  }
}

export default Message