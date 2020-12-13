import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

//////

import {ReactComponent as Logo} from "../../assets/images/crown.svg"
import  './Header.style.scss'
import {auth} from '../../FireBase/FireBase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden, cartItem}) =>{
    // console.log("props ", currentUser, hidden);
    return( 
        <div className="header">
                <Link className="logo-container" to="/">
                    <Logo  className="logo"/>
                 </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">contact </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>Log out</div>
                        : <Link className="option" to="/signin-signup">Sign In</Link>
                }
                
                <CartIcon  />
                {hidden?<CartDropdown />:null}
                {/* {(showDropDown)?<CartDropdown />:null} */}
            </div>
        </div>
    )
}
const mapStateToProps = ({ user: { currentUser }, cart: { hidden}}) =>({
    currentUser,
    hidden
    
});

export default connect(mapStateToProps, null)(Header); 

