import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../CollectionsOverview/CollectionsOverview';
import Collection from '../../pages/Collection/Collection';
import WithSpinner from '../WithSpinner/WithSpinner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { areCollectionsFetchingSelector, areCollectionsLoadedSelector } from '../../selectors/shopSelector';
import { fetchCollectionsStartAsync } from '../../actions/shopActions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching, areCollectionsLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={ `${ match.path }` } render={ (props) => <CollectionsOverviewWithSpinner isLoading={ isFetching } { ...props } /> } />
        <Route path={ `${ match.path }/:collectionId` } render={ (props) => <CollectionWithSpinner isLoading={ !areCollectionsLoaded } { ...props } /> } />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: areCollectionsFetchingSelector,
  areCollectionsLoaded: areCollectionsLoadedSelector,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
