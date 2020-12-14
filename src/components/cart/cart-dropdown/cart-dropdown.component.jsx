import React from 'react'
import {connect} from 'react-redux'

////
import './cart-dropdown.style.scss';
import { CustomButton} from '../../form-button/CustomButton.component'
import CartItem from '../cat-item/cart-item.component'
import {selectCartItems} from '../../../redux/cart/cart.selector'

const CartDropdown = ({cartItem}) => {
    
    return (
        <div className="cart-dropdown">
                {
                    cartItem.map((item)=>(
                        <CartItem key={item.id} {...item} />
                    ))
                }
                <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}
// const mapStateToProps = ({ cart: { cartItem}})=>({ cartItem })
const mapStateToProps = state => ({ cartItem: selectCartItems(state) })
export default connect(mapStateToProps,null)(CartDropdown)
