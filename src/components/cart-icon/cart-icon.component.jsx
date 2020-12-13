import React from 'react'
import {connect} from 'react-redux';

//////
import {ReactComponent as ShoppingBag} from '../../assets/images/shopping-bag.svg'
import { CartDropdownToggle} from '../../redux/cart/cart.action';

import './cart-icon.styles.scss';
const CartIcon = ({cartItem,toggleCartDropDown}) => {
    return (
        <div className="cart-icon" onClick={() => toggleCartDropDown()}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">
                {cartItem.length}
            </span>
        </div>
    )
}
const mapStateToProps = ({cart:{cartItem}}) =>({
    cartItem
})
const mapDispatchToProps = dispatch =>({
    toggleCartDropDown: () => dispatch(CartDropdownToggle())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
