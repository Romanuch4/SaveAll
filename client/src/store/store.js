import { createStore, combineReducers, applyMiddleware } from 'redux';
import { sign } from './reducers/sign';
import { common } from './reducers/common';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({ sign, common });

const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default Store;
