import React from 'react'

// function Image(props) {
//     return (
//         <div>
//             <img src={props.url} />
//             <div>Wow!!</div>
//         </div>
//     )
// }

class Image extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.url} />
                <div>Wow!!!</div>
            </div>
        )
    }
}

export default Image