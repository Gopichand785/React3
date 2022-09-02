import React, { Component } from 'react'
import Axios from 'axios'
 class User extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response)
            this.setState({users: response.data})
        }).catch(()=>{ })
    }
  render() {
    return (
      <div>
      <div className='container'>
        <div className='row'>
            <pre>{JSON.stringify(this.state.users)}</pre>
            {
                this.state.users.length >0 ?<React.Fragment>
                <div className='col-md-6'>
                    <table className='table table-hover'>
                        <thead className='bg-info text-white ' >
                            <th>id</th>
                            <th>name</th>
                            <th>city</th>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map((user)=>{
                                    return <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.address.city}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                </React.Fragment> : null
            }
        </div>
      </div>

      </div>
    )
  }
}

export default User