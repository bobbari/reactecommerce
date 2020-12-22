import React from 'react'
// import "./homepage.style.scss"
import Directory from '../../components/directory/directory.component'
import { HomepageContainer} from './Homepage.styles';

const HomepageComponent = () => {
    return (
        <HomepageContainer>
            <Directory />
        </HomepageContainer>
    )
}

export default HomepageComponent
