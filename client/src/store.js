import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const storeAndPersistor = { store, persistor }
export default storeAndPersistor;
