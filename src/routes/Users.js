import React, { Component } from 'react';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';


function Users() {
  return (
    <MainLayout location={location}>
      <div className='normal'>
        <UsersComponent />
      </div>
    </MainLayout>
  );
}

export default Users;
