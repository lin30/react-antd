import request from '../utils/request';
import config from '../configs';
const { url, _limit } = config

export function fetch(page) {
  // return request(`${url}/users?_page=${page}&_limit=${_limit}`); // url 模式
  return request(`/api/users?_page=${page}&_limit=${_limit}`); // webpack proxy模式
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}
export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values)
  })
}