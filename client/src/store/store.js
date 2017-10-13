
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { MessageReducer } from './reducers';


const rootReducer = combineReducers({
    MessageReducer
})


const Store = createStore(rootReducer, undefined, compose(applyMiddleware(thunk), autoRehydrate()));

export default Store

