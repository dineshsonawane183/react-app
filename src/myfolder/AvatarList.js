import './../App.css'
import React, { Component } from 'react';

class AvatarList extends Component {


    render() {
        console.log(this.props.name)
        return (<div className="avatarClass dib pa4 tc ma4 grow" ><h1>{this.props.name}</h1>
            <img className="avatarStyle" src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt="image" />
            <h4>{this.props.post}</h4>
        </div>);
    }

}
export default AvatarList;