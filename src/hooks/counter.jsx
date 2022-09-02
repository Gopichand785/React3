import React, { useState } from 'react'

const Counter = () => {
    let [product, setproduct]=useState({
    product_name:"redmi note9",
    image:" https://rukminim1.flixcart.com/image/416/416/kd69z0w0/mobile/s/h/p/mi-redmi-note-9-b086982zkf-original-imafu4qfyyyrg8er.jpeg?q=70",
    price: 49000, 
    qty:1
    })
 let incrHandler=()=>{
    setproduct({...product,qty:product.qty+1})
 }
 let decrHandler=()=>{
    setproduct({...product,qty:product.qty-1})
 }
 

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-8'>
            <table className='table table-hover'>
                <thead className='bg-dark text-white'>
                    <tr>
                    <td>product_name</td>
                    <td>image</td>
                    <td>price</td>
                    <td>qty</td>
                    <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{product.product_name}</td>
                    <td><img src={product.image}/></td>
                    <td>{product.price}</td>
                    <td><i className='fa fa-minus-circle'  onClick={decrHandler}> </i>{product.qty}<i className='fa fa-plus-circle ' onClick={incrHandler}></i></td>
                    <td> {product.qty*product.price}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Counter 