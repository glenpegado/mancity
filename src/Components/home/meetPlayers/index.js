import React, { Component } from 'react'
import Stripes from '../../../Resources/images/stripes.png'
import {Tag} from '../../ui/misc'


// state = {
    
// }
export default class MeetPlayers extends Component {
    render() {
        return (
            <div className="home_meetplayers"
                style={{background:`#ffffff url(${Stripes})`}}
            >
                <div className="container">
                    <div className="home_meetplayers_wrapper">
                        <div className="home_card_wrapper">
                            card
                        </div>
                        <div className="home_text_wrapper">
                            <div>
                                car
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
