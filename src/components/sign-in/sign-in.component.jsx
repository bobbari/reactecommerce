import React, { Component } from 'react'
import './sign-in.style.scss'
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../form-button/CustomButton.component';
import { auth,signInWithGoogle } from '../../FireBase/FireBase.utils'
// import {connect} from 'react-redux'

class Signin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            password:""
        }
    }
    
    handleSubmit = async(e) =>{
        e.preventDefault();
        const {email,password}= this.state;
        await auth.signInWithEmailAndPassword(email,password)
        .then((userDetails)=>{console.log("userDetails ",userDetails);
            this.setState({email: "", password: ""})
        })
        .catch((err)=>{console.log("err ",err)});
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
                    <CustomButton type="submit" >login</CustomButton>
                        <CustomButton onClick={() => signInWithGoogle()} isGoogleSignIn={true}>Sign In with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default Signin