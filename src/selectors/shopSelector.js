import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const shopSelector = state => state.shop;

export const collectionsSelector = createSelector([shopSelector], shop => shop.collections);

export const collectionsPreviewSelector = createSelector(
  [collectionsSelector],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const collectionSelector = memoize(collectionId => createSelector(
  [collectionsSelector],
  collections => collections ? collections[collectionId] : null
));
