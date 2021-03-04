import { createStore, combineReducers, applyMiddleware } from 'redux';
import { sign } from './reducers/sign';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({ sign });

const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default Store;
