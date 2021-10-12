import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import englandDetailsReducer from './details/englandDetails';

const reducer = combineReducers({
  englandDetailsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
  
export default store;