import Immutable from 'immutable'
import { REQUEST_POSTS, RECEIVE_POSTS } from './action'

const defaultlState = Immutable.fromJS({users: {}, isFetching: true})
export const fetchData = (state = defaultlState , action = {}) => {
    switch(action.type){
        case REQUEST_POSTS:
            // return Immutable.Map({users: {}, isFetching: true})
            return state.set('isFetching',true);
        case RECEIVE_POSTS:
            return Immutable.Map({users: action.json, page: action.page, 'isFetching':false});//返回一个新的state
        default:
            return state
    }
}

const reducers = {
    fetchData
}
export default reducers;