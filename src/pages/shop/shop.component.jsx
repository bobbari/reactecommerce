// system dependence
import React,{Component} from 'react';
import {Route} from 'react-router-dom';

// custom dependence
import  CollectionOverView from "../../components/collectionOverView/collectionOverView.component";
import CollectionPage from '../collections/Collection.component';
import { firestore, collectionsSnapShotDataToMap} from '../../FireBase/FireBase.utils';
import {connect} from 'react-redux'
import { updateShopData} from '../../redux/shop/shop.actions';
import Withspinner from "../../components/withspinner/Withspinner.component";

// hoc
const CollectionOverViewWithSpinner = Withspinner(CollectionOverView);
const CollectionPageWithSpinner = Withspinner(CollectionPage);
class ShopPage extends Component  {
          state={
            isLoading : true
          }
          unSubsribeFromShopData = null;
          
          componentDidMount(){
            const { updateCollectionIntoRedux} = this.props
            const collectionsRef = firestore.collection('collections')
            this.unSubsribeFromShopData = collectionsRef.onSnapshot(async(collections)=>{
              const collectionArray =  collectionsSnapShotDataToMap(collections);
              updateCollectionIntoRedux(collectionArray)
              this.setState({isLoading:false})
            })
            
          }        

          render (){
            return (
            <div className="shop-page">
              {/* <h1>Collections</h1> */}
              <Route exact path={`${this.props.match.path}`} 
              render={(props)=><CollectionOverViewWithSpinner isLoading={this.state.isLoading}  {...props}/>
              } />
              <Route path={`${this.props.match.path}/:collectionId`} 
              render={(props)=><CollectionPageWithSpinner  isLoading={this.state.isLoading}  {...props}/>} />
            </div>
            )
          }
}
const mapDispatchToProps = dispatch =>({
  updateCollectionIntoRedux: (data) => dispatch(updateShopData(data) )
})

export default connect(null, mapDispatchToProps)(ShopPage)