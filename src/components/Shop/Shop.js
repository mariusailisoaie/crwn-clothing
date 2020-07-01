import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../CollectionsOverview/CollectionsOverview';
import Collection from '../../pages/Collection/Collection';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={ `${ match.path }` } component={ CollectionsOverview } />
    <Route path={ `${ match.path }/:collectionId` } component={ Collection } />
  </div>
)

export default ShopPage;
