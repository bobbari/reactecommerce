// system dependence
import React,{Component} from 'react';
import {Route} from 'react-router-dom';
// import {createStructuredSelector} from 'reselect';

// custom dependence
// import  CollectionOverView from "../../components/collectionOverView/collectionOverView.component";
// import CollectionPage from '../collections/Collection.component';

import {connect} from 'react-redux'
import { fetchCollectionAsync} from '../../redux/shop/shop.actions';
// import Withspinner from "../../components/withspinner/Withspinner.component";
// import {selectCollectionFetching,selectCollectionIsLoading} from '../../redux/shop/shop.selector';
import CollectionOverViewContainer from '../../components/collectionOverView/collectionOverView.container';
import CollectionContainer from '../../pages/collections/Collection.container';
// hoc
//const CollectionOverViewWithSpinner = Withspinner(CollectionOverView);
// const CollectionPageWithSpinner = Withspinner(CollectionPage);
class ShopPage extends Component  {
          
          componentDidMount(){
            const { fetchCollection} = this.props
            fetchCollection();
          }        

          render (){
            // const {shopdata_isloading,collection_isLoading} = this.props
            return (
            <div className="shop-page">
              <Route exact path={`${this.props.match.path}`} 
              component={CollectionOverViewContainer}
              />
              {/* <Route path={`${this.props.match.path}/:collectionId`} 
              render={(props)=><CollectionPageWithSpinner  isLoading={!collection_isLoading}  {...props}/>} /> */}
              <Route path={`${this.props.match.path}/:collectionId`} 
              component={CollectionContainer}  />
              
            </div>
            )
          }
}
// const mapStateToProps = createStructuredSelector({
//   shopdata_isloading : selectCollectionFetching,
//   collection_isLoading : selectCollectionIsLoading
// })

const mapDispatchToProps = dispatch =>({
  fetchCollection: (data) => dispatch(fetchCollectionAsync(data) )
})

export default connect(null, mapDispatchToProps)(ShopPage)
// export default ShopPage;