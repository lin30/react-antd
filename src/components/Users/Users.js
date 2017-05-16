import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Pagination, Popconfirm } from 'antd';
// import UserModal from './UserModel';
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/action'


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
    const { actions } = this.props
    actions.fetchPosts(1)
  }
  // dva pagnigation不能通过函数调用到 actions
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
            onChange={(page) => { actions.fetchPosts(page)}}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const datas = state['fetchData'].toJS()
  const { users, page, isFetching } = datas
  const { data, total } = users
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
