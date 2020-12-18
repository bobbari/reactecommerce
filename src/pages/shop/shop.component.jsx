// system dependence
import React from 'react';
import {Route} from 'react-router-dom';

// custom dependence
import  CollectionOverView from "../../components/collectionOverView/collectionOverView.component";
import CollectionPage from '../collections/Collection.component';

const ShopPage = ({match}) => {
          return (
            <div className="shop-page">
                {/* <h1>Collections</h1> */}
                    <Route exact path={`${match.path}`} component={CollectionOverView}/>
                  <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
}

export default ShopPage