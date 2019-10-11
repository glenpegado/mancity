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
        this.state.stripes.map((stripe, i)=>(
            <Animate 
                key={i}
                show={true}
                start={{
                    background: '#ffffff'
                }}
                enter={{
                    background:[stripe.background],
                    timing: {dealey: 500, duration: 200, ease:easePolyOut}
                }}
            >
                {({background}) => {
                    return(
                        <div
                            className="stripe"
                            style={{background}}
                        ></div>
                    )
                }}
            </Animate>
        ))
    )


    render() {
        return (
            <div className="featured_stripes">
                {this.showStripes()}
            </div>
        )
    }
}
