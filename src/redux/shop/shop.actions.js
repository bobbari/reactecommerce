import { SHOP_TYPE} from "./shop.types";
import {firestore,collectionsSnapShotDataToMap} from '../../FireBase/FireBase.utils'

export const fetchCollectionStart = () => ({type:SHOP_TYPE.SHOPDATA_FETCHING_START})

export const fetchCollectionSuccess = (collectionData) => ({type:SHOP_TYPE.SHOPDATA_FETCHING_SUCCESS, payload:collectionData})

export const fetchCollectionFailed = (errorMessage) =>({type:SHOP_TYPE.SHOPDATA_FETCHING_FAILED, payload:errorMessage})

export const fetchCollectionAsync = data => {
    return (dispatch) => {
            dispatch(fetchCollectionStart())
        const collectionsRef = firestore.collection('collections');
        collectionsRef.get()
        .then((collections)=>{
        const collectionArray =  collectionsSnapShotDataToMap(collections);
            dispatch(fetchCollectionSuccess(collectionArray))
        }).catch((err)=>{
            dispatch(fetchCollectionFailed(err))
        })
   }
   
}
