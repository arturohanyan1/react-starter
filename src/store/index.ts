import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getCompose = (): any => {
  if (process.env.REACT_APP_REDUX_MODE === 'PROD') {
    return applyMiddleware(sagaMiddleware);
  } else {
    return composeEnhancers(applyMiddleware(sagaMiddleware));
  }
};

const initialState: any = {};

const store = createStore(rootReducer, initialState, getCompose());

sagaMiddleware.run(rootSaga);

const { dispatch, getState } = store;

export { dispatch, getState };

export default store;
