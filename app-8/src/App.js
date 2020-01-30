import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/1/').then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.data.name}</h1>
        <p>Height: {this.state.data.height} cm</p>
        <p>Weight: {this.state.data.mass} kg</p>
      </div>
    )
  }

}

export default App