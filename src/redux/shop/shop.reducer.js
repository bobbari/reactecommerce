// import SHOP_DATA from './shop.data'
import { SHOP_TYPE } from "./shop.types";

const inital_state = {
    collections: [],
    isLoading:false
}

const shopReducer = (state=inital_state,action) => {
    switch (action.type) {
        case SHOP_TYPE.UPDATA_SHOPDATA:
            return {...state,collections:action.payload}
        default:
            return state;
    }
}

export default shopReducer;
