import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Pagination, Popconfirm } from 'antd';
import UserModal from './UserModel';
import { hashHistory } from 'react-router';
import config from '../../configs'
const { _limit } = config

async function deleteHandler(actions, id, page) {
  await actions.removeId(id)
  await actions.fetchPosts(page)
}

async function editHandler(actions, page, id, values) {
  await actions.patchId(id, values)
  await actions.fetchPosts(page)
}

const Users = ({props: {
    dataSource,
    total,
    page,
    isFetching,
    actions
  }}) => {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <a>{text}</a>,
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
            <UserModal record={record} onOk={editHandler.bind(null, actions, page, record.id)}>
              <a>Edit</a>
            </UserModal>
            <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, actions, record.id, page)}>
              <a href="">Delete</a>
            </Popconfirm>
          </span>
        ),
      },
    ];
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
            pageSize={_limit}
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
export default connect()(Users);
