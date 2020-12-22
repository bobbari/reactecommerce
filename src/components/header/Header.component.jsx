import React from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from "../../assets/images/crown.svg"
// import  './Header.style.scss'
import {auth} from '../../FireBase/FireBase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user.selector';
import { selectCartDropdown } from '../../redux/cart/cart.selector'
import { HeaderDiv, LogoContainer, OptionsContainer, OptionsLink, OptionsDiv} from './Header.styles';

const Header = ({ currentUser, hidden, cartItem}) =>{
    return( 
        <HeaderDiv>
            <LogoContainer to="/">
                    <Logo  className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionsLink to="/shop">Shop</OptionsLink>
                <OptionsLink to="/shop">contact </OptionsLink>
                {
                    currentUser ?
                        <OptionsLink as='div' onClick={() => auth.signOut()}>Log out</OptionsLink>
                        : <OptionsLink  to="/signin-signup">Sign In</OptionsLink>
                }
                <CartIcon  />
                {hidden?<CartDropdown />:null}
               
            </OptionsContainer>
        </HeaderDiv>
    )
}
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden}}) =>({
//     currentUser,
//     hidden
// });
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartDropdown
});

export default connect(mapStateToProps, null)(Header); 

