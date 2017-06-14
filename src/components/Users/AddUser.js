import React, { Component } from 'react';
import UserModal from './UserModel';

const AddUser = ({ props: { actions, page }}) => {
  return (
    <div>
      <span className='add'>添加用户</span>
      <button className="btn" onClick={ () => addUsers(actions, page) }>+</button>
    </div>
  )
}
async function addUsers(ats, page) {
  const obj = {
    "name": "1",
    "username": "Bret",
    "email": "hahahah@curry.worrior",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "dub.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  await ats.addUsr(obj)
  await ats.fetchPosts(page)
}
export default AddUser