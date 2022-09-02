import React, { Component } from 'react'
class Products extends React. Component {
    state={
      Product:{
        Product_name:"POCO M4 5G (Cool Blue, 128 GB)",
        Image:"https://rukminim1.flixcart.com/image/416/416/l2jcccw0/mobile/i/p/o/-original-imagdu8j9vxscfdh.jpeg?q=70",
        qty:"1",
        price:"12749",
        total:"12749"
      } 
    }
    //speard operator property
    increHandler=()=>{
        this.setState({Product:{...this.state.Product, qty:this.state.Product.qty +1}})
    }
    decreHandler=()=>{
        this.setState({Product:{...this.state.Product, qty:this.state.Product.qty -1}})
    }
  render() {
    return (
      <div>
        <div className='container mt-5'>
            <div className='row'>
              <div className='col'>
                <table className='table table-hover'>
                  <thead className='bg-info'>
                    <th>Name</th>
                    <th>Image</th>
                    <th>qty</th>
                    <th>total.</th>
                 
                  </thead>
                  <tbody>
                    <tr>
                        <td>{this.state.Product.Product_name}</td>
                        <td><img src={this.state.Product .Image} height='150px'/></td>
                        <td >
                        <i class="fa fa-minus-circle" onClick={this.decreHandler} ></i> 
                        {this.state.Product.qty} <i class="fa fa-plus-circle" onClick={this.increHandler} ></i></td>
                        <td>{this.state.Product.qty* this.state.Product.price}</td>
                        
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Products