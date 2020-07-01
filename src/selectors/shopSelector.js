import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const collectionsSelector = createSelector([shopSelector], shop => shop.collections);

export const collectionsPreviewSelector = createSelector(
  [collectionsSelector],
  collections => Object.keys(collections).map(key => collections[key])
);

export const collectionSelector = collectionId => createSelector(
  [collectionsSelector],
  collections => collections[collectionId]
);
