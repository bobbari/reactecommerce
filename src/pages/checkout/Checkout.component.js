import React from 'react'
import { createStructuredSelector } from "reselect"
import { connect } from 'react-redux'

// import PropTypes from 'prop-types'

import './Checkout.style.scss'
import { selectCartItems, selectCartItemTotol } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'


export const Checkout = ({ cartItems, cartTotal }) => {
    
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((item) => (
                    <CheckoutItem
                        key={item.id}
                       item={item}
                        />
                ))
            }
            <div className="total">
                total :{cartTotal}
            </div>
            <div>

            </div>
        </div>
    )
}

// Checkout.propTypes = {
//     prop: PropTypes
// }

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        cartTotal: selectCartItemTotol
    }
)

// const mapDispatchToProps = {}

export default connect(mapStateToProps, null)(Checkout)
