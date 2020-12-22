import { SHOP_TYPE  } from "./shop.types";

export const updateShopData = (data) => {
    return{
        type:SHOP_TYPE.UPDATA_SHOPDATA,
        payload:data
    }
}
