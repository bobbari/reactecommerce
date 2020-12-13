import React from 'react'
import  './CustomButton.style.scss';
export const CustomButton = ({type,isGoogleSignIn,inverted,children, ...otherProps}) => {
    return (
        <button className={`
        ${(inverted) ? "inverted" : null} 
        ${(isGoogleSignIn) ? "google-sign-in " : ""}custom-button`} 
        {...otherProps}>{children}</button> 
    )
}