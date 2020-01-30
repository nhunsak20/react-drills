import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foodArray: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  foodData() {
    return this.state.foodArray.map((element, index) => <h2 key={index}>{element}</h2>)
  }

  render() {
    return (
      <div className="App">
        {this.foodData()}
      </div>
    )
  }
}

export default App