import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({imageUrl,name,quantity}) => {
    console.log(imageUrl,name)
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name}/>
            <span className="item-details"></span>
            <p>{quantity}</p>
            <p className="name">{name}</p>
        </div>
    )
}

export default CartItem
