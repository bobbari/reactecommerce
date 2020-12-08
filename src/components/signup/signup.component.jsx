import React, { Component } from 'react'
import './signup.styles.scss';
import {FormInput} from '../form-input/form-input.component'
import { CustomButton} from '../form-button/CustomButton.component';
class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
     handleSubmit = (e) =>{
        e.preventDefault();
        console.log("on submit handler ", this.state);
    }
    handlerChange = (e) =>{
        const {name,value} = e.target
        this.setState({
             [name]:value
        })
    }  
    render() {
        return (
            <div className='signup'>
              <h2>I don't have an account</h2> 
              <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={this.state.displayName}
                        handleChange={this.handlerChange} />
                    <FormInput
                        type="text"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        handleChange={this.handlerChange} />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handlerChange} />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={this.state.confirmPassword}
                        handleChange={this.handlerChange} />
                    <CustomButton type="submit" label="Sign Up" />
                </form>
            </div>
        )
    }
}

export default Signup;