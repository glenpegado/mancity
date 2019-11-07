import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/formFields';
import {validate} from '../../ui/misc';

import {firebasePromotions} from '../../../firebase';

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

    resetFormSuccess(){
        const newFormdata = {...this.state.formdata}
        
        for(let key in newFormdata){
            newFormdata[key].value = '';
            newFormdata[key].value = false;
            newFormdata[key].value = '';
        }

        this.setState({
            formError:false,
            formdata: newFormdata,
            formSuccess: 'Congratulations'
        })
    }
        successMessage(){
            setTimeout(() => {
                this.setState({
                    formSuccess:''
                })
            }, 2000)
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
            formError: false,
            formdata: newFormdata
        })
    }


    submitForm(event){
        event.preventDefault();
        const {formdata} = this.state;

        let dataToSubmit = {};
        let formIsValid = true;
        
        for(let key in formdata){
            dataToSubmit[key] = formdata[key].value;
            formIsValid = formdata[key].valid && formIsValid
        }

        if(formIsValid){
            console.log(dataToSubmit );
            this.resetFormSuccess()
        } else {
            this.setState({
                formError: true
            })
        }
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

                        {this.state.formError ? 
                            <div className="error_label">Something is wrong, try again.</div>: null}

                        <div className="success_label">{this.state.formSuccess}</div>
                        <button onClick={(event)=> this.submitForm}>Enroll</button>
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }

}

export default Enroll;