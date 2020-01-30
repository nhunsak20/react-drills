import React, { Component } from 'react'

import Todo from './Todo'

class List extends Component {
    render() {
        const list = this.props.taskArray.map((element, index) => <Todo key={index} todo={element} />) 
        return <div>{list}</div>
    }
}

export default List