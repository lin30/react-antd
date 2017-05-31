import request from '../utils/request';
import config from '../configs';
const { url, _limit } = config

export function fetch(page) {
  return request(`${url}/users?_page=${page}&_limit=${_limit}`);
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