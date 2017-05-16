import React from 'react';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
function IndexPage() {
  return (
    <MainLayout location={location}>
      <div className='normal'>
        <h1 className='title'>Yay! Welcome to dva!</h1>
        <div className='welcome' />
        <ul className='list'>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
      </div>
    </MainLayout>
  );
}


export default IndexPage;