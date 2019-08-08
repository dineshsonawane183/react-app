
import React, { Component } from 'react'
import App from '../App';
import './../App.css';
import 'tachyons'
import AvatarList from './AvatarList';
class Avatar extends Component {

    constructor() {
        super();
        this.state = {
            name: "Welcome To React"
        }
    }
    changeText(){
        console.log("In ChangeText")
        
        this.setState({
            name: "Welcome To React TextChange"
        })
        
    }
    render() {


        
        const AvatarObjectList = [{
            id: 0,
            name: "Dinesh",
            post: "Developer"
        },
        {
            id: 1,
            name: "Raj",
            post: "go Developer"
        },
        {
            id: 3,
            name: "Dinesh s.",
            post: "java Developer"
        },
        {
            id: 4,
            name: "xyz",
            post: "Developer"
        }
        ]

        const avatarCardList = AvatarObjectList.map((avatarCard, i) => {
            console.log(AvatarObjectList[i].name + AvatarObjectList[i].post)
            return <AvatarList key={i}
                name={AvatarObjectList[i].name}
                post={AvatarObjectList[i].post}
                id={i}
            />
        });


        return (
            <div className="tc">
                <h1 >{this.state.name}</h1>
                {avatarCardList}
                <button onClick={()=>this.changeText()}
                    className="f6 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">Click Here To Change Header Text</button>
            </div>

        );

    }
}
export default Avatar;