import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { areCollectionsLoadedSelector } from '../selectors/shopSelector';

import WithSpinner from '../components/WithSpinner/WithSpinner';
import Collection from '../pages/Collection/Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !areCollectionsLoadedSelector(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
