import React, { Component } from 'react'
import './App.css'

import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      taskArray: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(value) {
    this.setState({
      taskArray: [...this.state.taskArray, value]
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAdd}/>
        <List taskArray={this.state.taskArray}/>
      </div>
    )
  }

}

export default App