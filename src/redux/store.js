import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//组合之后的reducer
import reducer from './reducers';

//全局唯一的store,挂在window上方便查看
var store = createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
);

export default store;