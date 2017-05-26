import React, { Component } from 'react';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../redux/action'

function Users() {
  return (
    <MainLayout location={location}>
      <div className='normal'>
        <UsersComponent />
      </div>
    </MainLayout>
  );
}

// export default Users;
function mapStateToProps(state, props) {
  // 获取路由信息
  const routeInfo = state.routing.locationBeforeTransitions
  const { pathname } = routeInfo
  // 判断页码
  let params = pathname.replace(/[^0-9]/ig,"")
  if (!params) {
    params = 1
  }
  const datas = state['fetchData'].toJS()
  const { users, page, isFetching } = datas
  const { data, total } = users
  return {
    dataSource: data,
    total,
    page,
    isFetching,
    params
  };
}
function mapDispatchToProps(dispatch){
  return { 
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);