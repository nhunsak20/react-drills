import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        // this.alertDisplay = this.alertDisplay.bind(this)/
    }

    handleChange_user(value) {
        this.setState({
            username: value
        })
    }

    handleChange_pass(value) {
        this.setState({
            password: value
        })
    }

    alertDisplay = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input type='text' onChange={event => this.handleChange_user(event.target.value)} />
                <input type='text' onChange={event => this.handleChange_pass(event.target.value)} />
                <button onClick={this.alertDisplay}>Login</button>
            </div>
        )
    }
}

export default Login