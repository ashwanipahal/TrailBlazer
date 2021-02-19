import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import globalSagas from '../sagas';
import globalReducers from '../reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const configureStore = createStore(
  globalReducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(globalSagas)

export default configureStore;
