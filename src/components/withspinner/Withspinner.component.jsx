import React from 'react'
import {SpinnerOverlay,SpinnerContainer} from './Withspinner.styled';

const Withspinner  = WrappedComponent => {
    const spinner = ({isLoading,...otherProps}) => {
        return isLoading?(
           <SpinnerOverlay>
               <SpinnerContainer/>
           </SpinnerOverlay> 
        ):
        <WrappedComponent {...otherProps} />
    }
    return spinner
}

export default Withspinner
