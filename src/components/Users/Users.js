import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Pagination, Popconfirm } from 'antd';
// import UserModal from './UserModel';
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/action'
import { hashHistory } from 'react-router';

function deleteHandler(id) {
  // dispatch({
  //   type: 'users/remove',
  //   payload: id,
  // });
}
function editHandler(id, values) {
  // dispatch({
  //   type: 'users/patch',
  //   payload: { id, values },
  // });
}


class Users extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {//获取数据
    const { actions, params } = this.props
    actions.fetchPosts(params)
  }
  componentWillReceiveProps(next) {
    //
  }
  componentDidUpdate(prev, next) {
    // console.log(prev, next)
  }
  // dva pagnigation不能通过外部函数调用到 actions
  pageChangeHandler(page) {
    actions.fetchPosts(page)
  }
  render() { 
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="">{text}</a>,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
      },
      {
        title: 'Operation',
        key: 'operation',
        render: (text, record) => (
          <span className='operation'>
            {/*<UserModal record={record} onOk={editHandler.bind(null, record.id)}>
              <a>Edit</a>
            </UserModal>*/}
            <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
              <a href="">Delete</a>
            </Popconfirm>
          </span>
        ),
      },
    ];
    const { dataSource, total, page, isFetching, actions } = this.props
    return (
      <div className='normal'>
        <div>
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey={record => record.id}
            pagination={false}
            loading={isFetching}
          />
          <Pagination
            className="ant-table-pagination"
            total={Number(total) || 0}
            current={Number(page)}
            pageSize={3}
            onChange={(page) => { 
                hashHistory.push(`users/${page}`)
                actions.fetchPosts(page)
              }
            }
          />
        </div>
      </div>
    );
  }
}

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
