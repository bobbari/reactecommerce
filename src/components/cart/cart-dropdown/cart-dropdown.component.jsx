import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';


import './cart-dropdown.style.scss';
import { CustomButton} from '../../form-button/CustomButton.component'
import CartItem from '../cat-item/cart-item.component'
import {selectCartItems} from '../../../redux/cart/cart.selector'
import { CartDropdownToggle} from '../../../redux/cart/cart.action'

const CartDropdown = ({ cartItem, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
                { 
                (cartItem.length)?
                    cartItem.map((item)=>(
                        <CartItem key={item.id} {...item} />
                    )) :<span className="empty-message">your cart is empty</span>
                }
            <CustomButton onClick={
                () => { history.push("/checkout"); 
                dispatch(CartDropdownToggle())
            }
            }>Go To Checkout</CustomButton>
        </div>
    )
}
// const mapStateToProps = ({ cart: { cartItem}})=>({ cartItem })
const mapStateToProps = state => ({ cartItem: selectCartItems(state) })
// const mapDispatchToProps = dispatch => (
//     {toggleCartDropdown: () => dispatch(CartDropdownToggle())}
// )
export default withRouter(connect(mapStateToProps)(CartDropdown))
