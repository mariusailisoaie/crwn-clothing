import React from 'react';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionsSelector } from '../../selectors/shopSelector';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    <div>Shop Page</div>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={ id } { ...otherCollectionProps } />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: collectionsSelector,
});

export default connect(mapStateToProps)(ShopPage);
