import React from 'react'
import './cart-dropdown.style.scss';
import { CustomButton} from '../../form-button/CustomButton.component'
import CartItem from '../cat-item/cart-item.component'
const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-item">
                <CartItem/>
                <CustomButton>Go To Checkout</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdown
