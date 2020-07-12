import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { areCollectionsFetchingSelector } from '../selectors/shopSelector';

import WithSpinner from '../components/WithSpinner/WithSpinner';
import CollectionsOverview from '../components/CollectionsOverview/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: areCollectionsFetchingSelector,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
