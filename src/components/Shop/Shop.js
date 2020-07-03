import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../CollectionsOverview/CollectionsOverview';
import Collection from '../../pages/Collection/Collection';
import WithSpinner from '../WithSpinner/WithSpinner';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../actions/shopActions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
  state = {
    loading: true,
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionsRef = firestore.collection('collections');
    const { updateCollections } = this.props;

    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shop-page'>
        <Route exact path={ `${ match.path }` } render={ (props) => <CollectionsOverviewWithSpinner isLoading={ loading } { ...props } /> } />
        <Route path={ `${ match.path }/:collectionId` } render={ (props) => <CollectionWithSpinner isLoading={ loading } { ...props } /> } />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
