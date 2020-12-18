import SHOP_DATA from './shop.data'

const inital_state = {
    collections: SHOP_DATA
}

const shopReducer = (state=inital_state,action) => {
    switch (action.type) {
        case "customtype":
            return {...state};
    
        default:
            return state;
    }
}

export default shopReducer;
