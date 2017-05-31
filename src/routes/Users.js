import React, { Component } from 'react';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../redux/action'

class Users extends Component {
  componentDidMount() {//获取数据
    const { actions, params } = this.props
    actions.fetchPosts(params.page)
  }
  render() {
    return (
      <MainLayout location={location}>
        <div className='normal'>
          <UsersComponent props={this.props}/>
        </div>
      </MainLayout>
    );
  }

}

function mapStateToProps(state, props) {
  // params -- 路由参数
  const params = props.params
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