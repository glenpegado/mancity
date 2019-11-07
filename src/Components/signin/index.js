import React, { Component } from 'react'

export default class Signin extends Component {
    constructor(){
        super();
        this.state={
            formError:false,
            formSuccess:'',
            formdata:{
                email:{
                    element:'input',
                    value:'',
                    config:{
                        name:'email_input',
                        type: 'email',
                        placeholder: 'Enter your email'
                    },
                    validation:{
                        required: true,
                        email: true,
                    
                    },
                    valid: false,
                    validationMessage:''
                }
            }
        }
    }



    render() {
        return (
            <div>
                sign in 
            </div>
        )
    }
}

