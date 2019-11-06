import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/formFields';
import {validate} from '../../ui/misc';

class Enroll extends Component {
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
   

    updateForm(element){
        const newFormdata = {...this.state.formdata}   
        const newElement = {...newFormdata[element.id]}

        newElement.value = element.event.target.value;

        let valiData = validate(newElement)
        newElement.valid = valiData[0]
        newElement.validationMessage = valiData[1]
        
        newFormdata[element.id] = newElement;

        this.setState({
            formdata: newFormdata
        })
    }


    submitForm(event){
        event.preventDefault();
        const {formdata} = this.state;

        let dataToSubmit = {};
        let formIsValid = true;
        
        for(let key in formdata){
            dataToSubmit[key] = formdata[key]
        }

        console.log(dataToSubmit)
    }


    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event)=> this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                        <FormField 
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element)=> this.updateForm(element)}
                        />

                        <button onClick={(event)=> this.submitForm}>Enroll</button>
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }

}

export default Enroll;