import React, { Component } from 'react';
import UsersComponent from '../components/Users/Users';
import AddUserComponent from '../components/Users/AddUser';
import MainLayout from '../components/MainLayout/MainLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../redux/action'

class Users extends Component {
  componentDidMount() {//获取数据
    const { actions, page } = this.props
    actions.fetchPosts(page)
  }
  render() {
    return (
      <MainLayout location={location}>
        <div className='normal'>
          <AddUserComponent props={this.props}></AddUserComponent>
          <UsersComponent props={this.props}/>
        </div>
      </MainLayout>
    );
  }

}

function mapStateToProps(state, props) {
  // params -- 路由参数
  const page = props.params.page || 1
  const datas = state['fetchData'].toJS()
  const { users: { data, total }, isFetching } = datas
  return {
    dataSource: data,
    total,
    page,
    isFetching
  };
}

function mapDispatchToProps(dispatch){
  return { 
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);