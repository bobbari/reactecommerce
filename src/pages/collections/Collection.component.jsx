import React from 'react';
import {connect} from 'react-redux';

import { selectionCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collectionItem/collectionItem.component';
import './Collection.styles.scss';

const CollectionPage = ({  collection}) => {
   
    const { title, items} = collection;
  
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
            {
                items.map((item)=>(<CollectionItem key={item.id} item={item} />))
            }
            </div> 
        </div>
    )
}
const mapStateToProps = (state, PropsValue)=>({
    collection: selectionCollection(PropsValue.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)


