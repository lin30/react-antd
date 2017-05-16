import { fetch } from '../service/users'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

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

export const fetchPosts = (page) => {
    return dispatch => {
        dispatch(requestPosts(page));
        return fetch(page).then(json => {
          dispatch(receivePosts(page, json))
        })
    }
}