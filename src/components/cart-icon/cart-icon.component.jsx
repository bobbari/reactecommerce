import React from 'react'
import {connect} from 'react-redux';

//////
import {ReactComponent as ShoppingBag} from '../../assets/images/shopping-bag.svg'
import { CartDropdownToggle} from '../../redux/cart/cart.action';

import './cart-icon.styles.scss';
const CartIcon = (props) => {
    return (
        <div className="cart-icon" onClick={() => props.toggleCartDropDown()}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    toggleCartDropDown: () => dispatch(CartDropdownToggle())
})
export default connect(null, mapDispatchToProps)(CartIcon)
