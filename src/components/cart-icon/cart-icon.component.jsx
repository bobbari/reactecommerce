import React from 'react'
import {connect} from 'react-redux';

//////
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
// const mapStateToProps = ({cart:{cartItem}}) =>({itemCount: cartItem.reduce((accumilatedQuantity, item) => (accumilatedQuantity + item.quantity),0) })

const mapStateToProps = (state)=>({itemCount: selectCartItemsQuantity(state)});

const mapDispatchToProps = dispatch =>({toggleCartDropDown: () => dispatch(CartDropdownToggle())})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
