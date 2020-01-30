import React, { Component } from 'react'  
import './App.css'

import { Link } from 'react-router-dom'
import Routes from './router'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/details'>Details</Link>
          </ul>
        </nav>
        <Routes/>
      </div>
    )
  }
}

export default App