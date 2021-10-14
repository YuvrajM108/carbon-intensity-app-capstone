import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import englandDetailsReducer from './details/englandDetails';
import englandRegionDetailsReducer from './details/englandRegionDetails';
import scotlandDetailsReducer from './details/scotlandDetails';
import scotlandRegionDetailsReducer from './details/scotlandRegionDetails';
import walesDetailsReducer from './details/walesDetails';
import walesRegionDetailsReducer from './details/walesRegionDetails';
import gbDetailsReducer from './details/gbDetails';

const reducers = combineReducers({
  englandDetailsReducer,
  englandRegionDetailsReducer,
  scotlandDetailsReducer,
  scotlandRegionDetailsReducer,
  walesDetailsReducer,
  walesRegionDetailsReducer,
  gbDetailsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
