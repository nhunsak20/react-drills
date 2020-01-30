import React, { Component } from 'react'
import './App.css'

import Todo from './Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      toDoArray: [],
      userInput: ''
    }
  }

  handleChange(value) {
    this.setState({
      userInput: value
    })
  }

  addTodo = () => {
    this.setState({
      toDoArray: [...this.state.toDoArray, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    const list = this.state.toDoArray.map((element, index) => <Todo key={index} todo={element} />)
    return (
      <div className='App'>
         <h1>My to-do list:</h1>
         <input value={this.state.userInput} type='text' onChange={event => this.handleChange(event.target.value)} placeholder='Enter new task' />
         <button onClick={this.addTodo}>Add</button>
         {list}
      </div>
    )
  }
}

export default App