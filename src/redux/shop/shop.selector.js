import {createSelector} from 'reselect';

export const  selectCollection = state=> state.shop;

export const selectCollectionSection = createSelector(
    [selectCollection],
    (shop) => shop.collections
)
export const selectCollectionForPreview =createSelector(
    [selectCollectionSection],
    (collections) => Object.values(collections)// or
    // (collections) => Object.keys(collections).map((key) => collections[key])
)

export const selectionCollection = collectionUrlParam => createSelector(
    [selectCollectionSection],
    (collections) => collections[collectionUrlParam]
    // (collections) => collections.find((collection) => ( collection.id === COLLECTION_ID_MAP[collectionUrlParam]))
)

