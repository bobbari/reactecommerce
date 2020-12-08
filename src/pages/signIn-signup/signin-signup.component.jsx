import React from 'react'
import './signin-signup.styles.scss'
import Signin from '../../components/sign-in/sign-in.component'
import Signup from '../../components/signup/signup.component';
const SigninSignup = () => {
    return (
        <div className="signin-signup">
            <div className="signin">
                <Signin />
            </div>
            <div className="signUp">
                <Signup />
            </div>
        </div>
    )
}

export default SigninSignup
