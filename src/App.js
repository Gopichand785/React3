/* import React from 'react'
import Navbar from './Navbar/Navbar'
import Counter from './user/counter'
import Jan from './user/state'
import Chillar from './user/Chillar'
import Product from './user/product'
import Products from './user/product-1'
import Message from './user/message'
import Emp from './user/clock'
import Ramu from './Navbar/ramu'
import One from './forms/one' 
import Navbar from './forms/Santosh'
const App = () => {
  
  return (
    <div>
  {/*   <Navbar/>
 <Counter/>
  <Jan/>
  <Chillar/>
  <Product/>
<Products/>
<Message/>
<Emp/>
<Ramu/>
<One/> }
<Navbar/>
    </div>
  )
}

export default App */


/* 
import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './handle/Home'
import About from './handle/about'
import Contact from './handle/contact' 
import User from './axios/user'
 class App extends Component {
  render() {
    return (
      <div>
   <Router> 
<Navbar/>
<Routes>
  <Route path='/user' element={<User/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
</Router> 
      </div>
    )
  }
}

export default App */

import React, { Component } from 'react'
import{BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
/* import Contact from './contactApp/gopi' */ 
//  import Message from './Message/message'
/* import Counter from './hooks/counter' */
// import User from './axios/user'
// import TodoApp from './Todo/TodoApp'
import Task from './vijaytask/task'
class App extends Component {
  render() {
    return (
      <div>
      {/* <User/> */}
        <Router>
          <Navbar/>
          <Routes>
            {/* <Route path='/contact' element={<Contact/>}/> */}
            {/* <Route path='/reduxeEx'   element={<Message/>}/> */}
        {/*     <Route path='/Counter'   element={<Counter/>}/> */}
          {/* <Route path='/toapp' element={<TodoApp/>}/> */}
          <Route path='/form' element={<Task/>}/>
         
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App