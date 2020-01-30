import React, { Component } from 'react'

class Todo extends Component {
    
    render() {
        return (
            <p>{this.props.todo}</p>
        )
    }
}

export default Todo