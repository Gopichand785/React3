import React, { Component } from 'react'

class CompB extends React. Component {
  render() {
    return (
        <div>
    <pre>{JSON.stringify(this.props)}</pre>
    <h2>wish message:{this.props.one}</h2>
    <h3>wish name:{this.props.two}</h3>
    <hr/>
    <h4>empoyee name:{this.props.two}</h4>
    <h4>employee message:{this.props.emp_message}</h4>

      </div>
    )
  }
}

export default CompB