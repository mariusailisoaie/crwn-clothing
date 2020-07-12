import React from 'react';

import './Collection.scss';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import { connect } from 'react-redux';
import { collectionSelector } from '../../selectors/shopSelector';

const Collection = ({ collection: { title, items } }) => (
  <div className='collection'>
    <h2 className='title'>{ title }</h2>

    <div className='items'>
      { items.map(item => <CollectionItem key={ item.id } item={ item } />) }
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
