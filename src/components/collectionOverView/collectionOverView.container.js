import {compose} from 'redux';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import Withspinner from '../../components/withspinner/Withspinner.component'
import {selectCollectionFetching} from '../../redux/shop/shop.selector';
import CollectionOverView from "./collectionOverView.component"

// const CollectionOverViewContainer =  (WrapperComponent) =>{
//     const innerContainer = ({otherProps,shopdata_isloading}) => {
//         return <WrapperComponent isLoading={shopdata_isloading}  {...otherProps}/>
//     }
//     return innerContainer
// }
const mapStateToProps = createStructuredSelector({
    isLoading : selectCollectionFetching,
})
const CollectionOverViewContainer = compose(
    connect(mapStateToProps),
    Withspinner,
)(CollectionOverView)

export default CollectionOverViewContainer