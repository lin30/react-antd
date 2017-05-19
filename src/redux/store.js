import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'
//组合之后的reducer
import reducer from './reducers';
import hashHistory from 'react-router'

//全局唯一的store,挂在window上方便查看
var store = createStore(
    combineReducers({
        ...reducer,
        routing: routerReducer
    }),
    applyMiddleware(thunk)
);

export default store;