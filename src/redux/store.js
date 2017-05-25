import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'
//组合之后的reducer
import reducer from './reducers';
import hashHistory from 'react-router'
import { createLogger } from 'redux-logger'

const middleware = [ thunk ];
console.log(process.env)
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
//全局唯一的store,挂在window上方便查看
var store = createStore(
    combineReducers({
        ...reducer,
        routing: routerReducer
    }),
    applyMiddleware(...middleware)
);

export default store;