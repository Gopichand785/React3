/* import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/home" className='navbar-brand'>react router-dom</Link>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
          <li className='nav-list'><Link to="/user" className='nav-link'>user</Link></li>
            <li className='nav-list'><Link to="/home" className='nav-link'>Home</Link></li>
            <li className='nav-list'><Link to="/about" className='nav-link'>about</Link></li>
            <li className='nav-list'><Link to="/contact" className='nav-link'>contact</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar */


import React, { Component } from 'react'
import {Link} from "react-router-dom"
 class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/index" className='navbar-brand'>redux- example</Link>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
            <Link to="/reduxEx" className='nav-link'>message</Link>
            <Link to="/form" className='nav-link'>form</Link>
            
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar