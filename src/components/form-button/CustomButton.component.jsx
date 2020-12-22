import React from 'react'
import  './CustomButton.style.scss';

// import {CustomButtonContainer} from './CustomButton.styles';
// export const CustomButton = ({children, ...rest})=>(
//     <CustomButtonContainer {...rest}>{children}</CustomButtonContainer>
// )

export const CustomButton = ({type,isGoogleSignIn,inverted,children, ...otherProps}) => {
    return (
        <button className={`
        ${(inverted) ? "inverted" : null} 
        ${(isGoogleSignIn) ? "google-sign-in " : ""}custom-button`} 
        {...otherProps}>{children}</button> 
    )
}