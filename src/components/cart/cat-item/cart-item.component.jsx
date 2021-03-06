import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({imageUrl,name,quantity,price}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name}/>
            <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{price} X {quantity}</span>
            </div>
        </div>
    )
}

export default CartItem
