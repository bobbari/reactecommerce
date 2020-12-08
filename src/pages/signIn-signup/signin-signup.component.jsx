import React from 'react'
import './signin-signup.styles.scss'
import Signin from '../../components/sign-in/sign-in.component'
import Signup from '../../components/signup/signup.component';
const SigninSignup = () => {
    return (
        <div className="signin-signup">
            <Signin />
            <Signup />
        </div>
    )
}

export default SigninSignup
