import React, { Component } from 'react'
import './sign-in.style.scss'
import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../form-button/CustomButton.component';
import { signInWithGoogle } from '../../FireBase/FireBase.utils'

export default class Signin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
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
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <FormInput type="text" label="Email" name="email" value={this.state.email} handleChange={this.handlerChange} required/>
                    </div>
                    <div>
                        <FormInput type="password" name="password" value={this.state.password} label="Password" handleChange={this.handlerChange} required />
                    </div>
                    <div className="buttons">
                    <CustomButton type="submit" label="login" >
                        login
                    </CustomButton>
                    <CustomButton 
                        onClick={signInWithGoogle}
                        isGoogleSignIn={true}
                         >Sign In with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
