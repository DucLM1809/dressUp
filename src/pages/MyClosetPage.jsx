import { Button, Space, Table, Tag } from 'antd'
import React from 'react'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

const MyClosetPage = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      )
    }
  ]
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
  return (
    <div>
      <HeaderDark />
      <div className='p-20'>
        <div style={{ marginBottom: 24, display: 'flex', gap: '10px' }}>
          <Button>
            <PlusOutlined style={{ color: 'green' }} />
          </Button>
          <Button>
            <EditOutlined style={{ color: 'blue' }} />
          </Button>
          <Button>
            <DeleteOutlined style={{ color: 'red' }} />
          </Button>
        </div>
        <Table columns={columns} dataSource={data} />;
      </div>

      <Footer />
    </div>
  )
}

export default MyClosetPage
