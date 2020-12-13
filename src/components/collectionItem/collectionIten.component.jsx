import React from 'react'
import {connect} from 'react-redux'

/////

import {addItem} from '../../redux/cart/cart.action'
import './collectionItem.style.scss'
import {CustomButton} from '../form-button/CustomButton.component';

const CollectionIten = ({ id, name, imageUrl, price,item, addToCart}) => {
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}>

            </div>
            
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted={true} label="Add To Cart" 
                onClick={() => addToCart(item)}>Add To Cart</CustomButton>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>({
    addToCart: (item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionIten)
