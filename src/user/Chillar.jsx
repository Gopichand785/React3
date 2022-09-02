import React, { Component } from 'react'
 class Chillar extends React.Component {
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
        <React.Fragment>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>qty:{this.state.qty}</div>
                  <div className='card-body '>
                    <button className='btn btn-warning mr-5' onClick={this.incerHandler}>INCER</button>
                    <button className='btn btn-primary' onClick={this.decerHandler}>DECER</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
  }
}

export default Chillar