import React from 'react';

import './CollectionsOverview.scss';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionsSelector } from '../../selectors/shopSelector';

const CollectionsOverview = ({ collections }) => (
  <div className='collection-overview'>
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

export default connect(mapStateToProps)(CollectionsOverview);
