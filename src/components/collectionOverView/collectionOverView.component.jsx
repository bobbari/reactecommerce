import React from 'react'
import { connect } from 'react-redux'
import  "./collectionOverView.styles.scss";
import { createStructuredSelector } from 'reselect'

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collectionPreview/CollectionPreview.compoent';

export const collectionOverView = ({ collections}) => {
    
    return (
        <div className="collections-overview">
            {
                collections.map((item) => (
                    <CollectionPreview key={item.id} {...item} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})



export default connect(mapStateToProps, null)(collectionOverView)
