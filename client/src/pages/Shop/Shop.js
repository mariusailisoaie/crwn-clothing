import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../containers/CollectionsOverviewContainer';
import CollectionContainer from '../../containers/CollectionContainer';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../actions/shopActions';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route exact path={ `${ match.path }` } component={ CollectionsOverviewContainer } />
      <Route path={ `${ match.path }/:collectionId` } component={ CollectionContainer } />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
