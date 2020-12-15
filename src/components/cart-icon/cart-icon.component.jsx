import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingBag} from '../../assets/images/shopping-bag.svg'
import { CartDropdownToggle} from '../../redux/cart/cart.action';
import {selectCartItemsQuantity} from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';
const CartIcon = ({ itemCount,toggleCartDropDown}) => {
    return (
        <div className="cart-icon" onClick={() => toggleCartDropDown()}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">
                {itemCount}
            </span>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({itemCount:selectCartItemsQuantity});

const mapDispatchToProps = dispatch =>({toggleCartDropDown: () => dispatch(CartDropdownToggle())})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
