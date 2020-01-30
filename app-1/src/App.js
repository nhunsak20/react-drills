import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  handleChange(value) {
    this.setState({
      userInput: value
    })
  }

  render() {
    return (
      <div className='App'>
        <input type='text' onChange={event => this.handleChange(event.target.value)} />
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}

export default App
