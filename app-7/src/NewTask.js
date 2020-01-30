import React, { Component } from 'react'

class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
        this.addTask = this.addTask.bind(this)
    }

    handleChange(value) {
        this.setState({
            userInput: value
        })
    }

    addTask() {
        this.props.add(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }

    render() {
        return (
            <div>
                <input type='text' onChange={event => this.handleChange(event.target.value)} placeholder='Enter new task' value={this.state.userInput} />
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }
}

export default NewTask