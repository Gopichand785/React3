import React, { Component } from 'react'

export class One extends Component {
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    SubmitHandler=(event)=>{
        event.preventDefault()
        alert((JSON.stringify(this.state)))
    }
  render() {
    return (
      <div>
      {/* <pre>{JSON.stringify(this.state)}</pre> */}
       {/*  <form onSubmit={this.SubmitHandler}>
        
        :&nbsp;:&nbsp;name:&nbsp;&nbsp;&nbsp;<input type="text" onChange={this.emailHandler}/><br/><br/>
            password:<input type="text" onChange={this.passwordHandler}/><br/>
            <input type="submit" value='login'/>
        </form> */}

        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4'>
            <div className='card '>
                <div className='card-header bg-info'>login</div>
                <form onSubmit={this.SubmitHandler}>
                    <div className='form-group mt-5'>
                        <input type="text" placeholder='Email' className='form-control' onChange={this.emailHandler}/>
                    </div>
                    <div className='form-group'>
                        <input type="text" placeholder='password' className='form-control' onChange={this.passwordHandler}/>
                    </div>
                    <button className='bg-info'>login</button>
                </form>
            </div>
           
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default One