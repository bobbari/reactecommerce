import { compose } from "redux";
import { connect } from 'react-redux';
import Withspinner from "../../components/withspinner/Withspinner.component";
import Collection from './Collection.component';
import {createStructuredSelector} from 'reselect';
import {selectCollectionIsLoading} from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isLoading :(state)=> !selectCollectionIsLoading(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    Withspinner
)(Collection);

export default  CollectionContainer;