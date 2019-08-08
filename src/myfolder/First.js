import React, { Component } from 'react';


const First = (props)=>{
    return <h1>Hello {props.name}</h1>;
}

// class First extends Component {
//     render() {
//         return <h1>Hello {this.props.name}</h1>;
//     }
// }
export default First;