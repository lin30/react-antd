import { fetch, remove, patch, addUser } from '../service/users'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REMOVE_ID_BEGIN = 'REMOVE_ID_BEGIN'
export const REMOVE_ID_END = 'REMOVE_ID_END'
export const PATCH_ID_BEGIN = 'PATCH_ID_BEGIN'
export const PATCH_ID_END = 'PATCH_ID_END'
export const ADD_USER_BEGIN = 'ADD_USER_BEGIN'
export const ADD_USER_END = 'ADD_USER_END'

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
const patchUserBegin = id => {
  return {
    type: PATCH_ID_BEGIN,
    id
  }
}

const patchUserEnd = id => {
  return {
    type: PATCH_ID_END,
    id
  }
}

const addUserBegin = values => {
  return {
    type: ADD_USER_BEGIN,
    values
  }
}

const addUserEnd = values => {
  return {
    type: ADD_USER_END,
    values
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

export const patchId = (id, values) => {
    return dispatch => {
        dispatch(patchUserBegin(id));
        return patch(id, values).then(json => {
          dispatch(patchUserEnd(id, json))
        })
    }
}

export const addUsr = (values) => {
    return dispatch => {
        dispatch(addUserBegin(values));
        return addUser(values).then(json => {
          dispatch(addUserEnd(json))
        })
    }
}