import React from 'react'
import  './CustomButton.style.scss';
export const CustomButton = ({type,isGoogleSignIn,children, ...otherProps}) => {
    return (
        <button className={`${(isGoogleSignIn) ? "google-sign-in " : ""}custom-button`} {...otherProps}>{children}</button> 
    )
}