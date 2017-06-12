import { fetch, remove } from '../service/users'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REMOVE_ID_BEGIN = 'REMOVE_ID_BEGIN'
export const REMOVE_ID_END = 'REMOVE_ID_END'

const requestPosts = page => {
  return {
    type: REQUEST_POSTS,
    page
  }
}
const receivePosts = (page, json) => {
  return {
        type: RECEIVE_POSTS,
        page,
        json 
    }
}

const removeUserBegin = id => {
  return {
    type: REMOVE_ID_BEGIN,
    id
  }
}

const removeUserEnd = id => {
  return {
    type: REMOVE_ID_END,
    id
  }
}

export const fetchPosts = (page) => {
    return dispatch => {
        dispatch(requestPosts(page));
        return fetch(page).then(json => {
          dispatch(receivePosts(page, json))
        })
    }
}

export const removeId = (id) => {
    return dispatch => {
        dispatch(removeUserBegin(id));
        return remove(id).then(json => {
          dispatch(removeUserEnd(id, json))
        })
    }
}