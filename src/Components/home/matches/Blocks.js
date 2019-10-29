import React, { Component } from 'react'
import {firebaseMatches} from '../../../firebase'
export default class Blocks extends Component {
    
    state = {
        matches:[]
    }

    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            console.log(snapshot.val)
        })
    }

    showMatches = () => (
        <div>
            match
        </div>
    )

    render() {
        return (
            <div classname="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}
