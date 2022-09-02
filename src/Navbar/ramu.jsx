import React, { Component } from 'react'
import Students from '../Employee/data'
import Emp from '../Employee/data'
export class Ramu extends Component {
    constructor(props){
        super(props)
        console.log("first")
    }
    componentDidMount(){
        console.log("third")
    }
  render() {
    console.log("second")
    return (
      <div>
      <div className='container mt-5'>
          <div className='row'>
            <div className='col'>
              <table className='table table-hover'>
                <thead className='bg-info'>
                <tr>
                  <th>id</th>
                  <th>first_name</th>
                  <th>last_name</th>
                  <th>email</th>
                  <th>gender</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Students.map((ram)=>{
                       return <tr key={ram}>
                            <td>{ram.id}</td>
                            <td>{ram.first_name}</td>
                            <td>{ram.last_name}</td>
                            <td>{ram.email}</td>
                            <td>{ram.gender}</td>
                        </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
    
    )
  }
}

export default Ramu