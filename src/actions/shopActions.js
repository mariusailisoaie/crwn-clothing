import { ShopActionTypes } from './actionTypes/shopActionTypes';

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
