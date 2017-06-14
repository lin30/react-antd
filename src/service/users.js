import request from '../utils/request';
import config from '../configs';
const {
  url,
  _limit
} = config

export function fetch(page) {
  // return request(`${url}/users?_page=${page}&_limit=${_limit}`); // url 模式
  return request(`/api/users?_page=${page}&_limit=${_limit}`); // webpack proxy模式
}

export function remove(id) {
  return request(`/api/users/remove/${id}`, {
    method: 'DELETE'
  });
}

export function addUser(values) {
  return request(`/api/users/addUser`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ values })
  });
}

export function patch(id, values) {
  return request(`/api/users/patch`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" // 设置 Json 头部, express 才可以解析 post 参数
    },
    body: JSON.stringify({
      id,
      values
    })
  })
}