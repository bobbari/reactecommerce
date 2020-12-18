import {directoryType} from "./directory.type" 

export const getCategoryList = (data) =>{
    return {
        type:directoryType.CATEGORY_LIST,
        payload: data
    }
}