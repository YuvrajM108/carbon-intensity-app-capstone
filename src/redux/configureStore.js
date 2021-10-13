import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import englandDetailsReducer from './details/englandDetails';
import scotlandDetailsReducer from './details/scotlandDetails';
import walesDetailsReducer from './details/walesDetails';
import gbDetailsReducer from './details/gbDetails';

const reducers = combineReducers({
  englandDetailsReducer,
  scotlandDetailsReducer,
  walesDetailsReducer,
  gbDetailsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
