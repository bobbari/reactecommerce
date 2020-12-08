import React, { Component } from 'react'
import './signup.styles.scss';
import {FormInput} from '../form-input/form-input.component'
import { CustomButton} from '../form-button/CustomButton.component';
import {auth,createUserProfileDocument} from '../../FireBase/FireBase.utils'

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
     handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("on submit handler ", this.state);
        const {displayName,email,password,confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("password doesn't match");
            return 
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});    
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            })
        } catch (error) {
            console.log("err while create user ", error);
        }
        
    }

    handlerChange = (e) =>{
        const {name,value} = e.target
        this.setState({
             [name]:value
        })
    }  
    render() {
        const { displayName,email,password,confirmPassword } = this.state
        return (
            <div className='sign-up'>
              <h2 className="title">I don't have an account</h2> 
              <span>Sign up with your email and password</span>
                <form  className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={displayName}
                        handleChange={this.handlerChange} />
                    <FormInput
                        type="text"
                        name="email"
                        label="Email"
                        value={email}
                        handleChange={this.handlerChange} />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        handleChange={this.handlerChange} />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        handleChange={this.handlerChange} />
                    <CustomButton type="submit" >Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup;