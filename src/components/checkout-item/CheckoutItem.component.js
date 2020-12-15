import React from 'react'
import {connect} from 'react-redux'

import './CheckoutItem.styles.scss';
import { clearItemFromCart,removeItem,addItem} from '../../redux/cart/cart.action'

const CheckoutItem = ({ item, dispatch}) => {
    const  { name, imageUrl, quantity, price } = item
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>dispatch(removeItem(item))}>&#10094; </div>
                <span className="value"> {quantity}</span>
                <div className="arrow" onClick={() => dispatch(addItem(item))}>&#10095; </div>
                </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</span>
        </div>
    )
}

export default connect(null)(CheckoutItem)
