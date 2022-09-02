import React, { Component } from 'react'

export class Emp extends Component {
    constructor(props){
        super(props)
        console.log("constructor-excutes automatically")
        this.state={
            currentTime: new Date().toLocaleTimeString()

        }
    }
    componentDidMount(){
console.log("componentDidMount- excutes automatically")
 setInterval(()=>{
    this.setState({currentTime:new Date().toLocaleTimeString()})
 },1000)
    }
  render() {
    console.log("render-will excutes automatically")
    return (
      <div>
      <h1>Employee data salaray</h1>
      <div className='container mt-5'>
            <div className='row'>
              <div className='col'>
              <div className='card'>
                <div className='card-header bg-primary'>
                    <h3>Time:{this.state.currentTime}</h3>
                </div>
              </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Emp