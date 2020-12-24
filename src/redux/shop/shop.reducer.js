// import SHOP_DATA from './shop.data'
import { SHOP_TYPE,
        SHOPDATA_FETCHING_START,
        SHOPDATA_FETCHING_SUCCESS,
        SHOPDATA_FETCHING_FAILED} from "./shop.types";

const inital_state = {
    collections: null,
    isLoading:false,
    error:null
}

const shopReducer = (state=inital_state,action) => {
    switch (action.type) {
         case SHOP_TYPE.SHOPDATA_FETCHING_START:
            return {...state,isLoading:true}
        case SHOP_TYPE.SHOPDATA_FETCHING_SUCCESS:
            return {...state,collections:action.payload,isLoading:false}
        case SHOP_TYPE.SHOPDATA_FETCHING_FAILED:
            return {...state,error:action.payload,isLoading:false}        
        default:
            return state;
    }
}

export default shopReducer;
