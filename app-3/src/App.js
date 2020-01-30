import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foodArray: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
  }

  handleChange(value) {
    this.setState({
      userInput: value
    })
  }

  searchData(value) {
    return this.state.foodArray.filter(element => element.includes(value))
      .map((element, index) => <h2 key={index}>{element}</h2>)
  }

  render() {
    return (
      <div className='App'>
        <input type='text' onChange={event => this.handleChange(event.target.value)} />
        {this.searchData(this.state.userInput)}
      </div>
    )
  }
}

export default App