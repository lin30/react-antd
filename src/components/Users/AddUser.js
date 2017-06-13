import React, { Component } from 'react';
import UserModal from './UserModel';

const AddUser = ({ props: { actions }}) => {
  return (
    <div>
      <span className='add'>添加用户</span>
      <button className="btn" onClick={ () => addUsers(actions) }>+</button>
    </div>
  )
}
function addUsers(ats) {
  console.log(ats)
}
export default AddUser