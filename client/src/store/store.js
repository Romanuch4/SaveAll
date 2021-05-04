import { createStore, combineReducers, applyMiddleware } from 'redux';
import { common } from './reducers/common';
import { dashboard } from './reducers/dashboard';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({ common, dashboard });

const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));
window.Store = Store;
export default Store;
