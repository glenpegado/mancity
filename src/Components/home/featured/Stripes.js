import React, { Component } from 'react'
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate'

export default class Stripes extends Component {
    
    state = {
        stripes:[
        {
            background:'#98c5ee9'
        },
        {
            background:'#ffffff'

        },
        {
            background:'#98c5ee9'

        }
    ]
}

    showStripes = () => (
        <div> stripes </div>
    )


    render() {
        return (
            <div className="featured_stripes">
                {this.showStripes()}
            </div>
        )
    }
}
