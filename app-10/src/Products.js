import React, { Component } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

class Products extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('https://practiceapi.devmountain.com/products').then(response => {
            this.setState({
                data: response.data
            })
        })
    }

    // selected() {
    //     const products = this.state.products.map((element, index) => {
    //         if(element.image) {
    //             return(
    //                 <Link key={index} to={`/details/${products.id}`}><img width='200' src={products.image} /></Link>
    //             )
    //         }
    //     })
    // }

    render() {
        const products = this.state.data.map((element, index) => {
            if(element.image) {
                return(
                    <Link key={index} to={`/details/${element.id}`}><img width='200' src={element.image} /></Link>
                )
            }
        })
        return(
            <div>
                <h1>Products</h1>
                {products}
            </div>
        )
    }
}

export default Products