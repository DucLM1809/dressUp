import { Button, Image, Space, Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import { DeleteOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd'
import AxiosGet from '../config/axiosGet'
import { NotificationCustom } from '../components/Notification'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../constants/common'

const MyClosetPage = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const fetchCloset = () => {
    AxiosGet('closet/me')
      .then((res) => setData(res.data))
      .catch((err) =>
        setData(
          NotificationCustom({
            type: 'error',
            message: 'Error',
            description: err?.response?.data?.detail
          })
        )
      )
  }

  useEffect(() => {
    fetchCloset()
  }, [])

  const columns = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      align: 'center',
      render: (text) => (
        <Image
          src='https://i.pinimg.com/564x/4f/75/a3/4f75a37e3b053109bef8b52156a0b99f.jpg'
          width={150}
        />
      )
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
      render: (_, record) => (
        <InputNumber defaultValue={record.quantity} className='w-[50px]' />
      )
    },
    {
      title: 'Total',
      key: 'total',
      dataIndex: 'total'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button danger className='flex items-center'>
            <DeleteOutlined />
          </Button>
        </Space>
      )
    }
  ]
  // const data = [
  //   {
  //     key: '1',
  //     image:
  //       'https://i.pinimg.com/564x/4f/75/a3/4f75a37e3b053109bef8b52156a0b99f.jpg',
  //     product: 'Jacket',
  //     price: '$59.00',
  //     quantity: 1,
  //     total: '$59.00'
  //   },
  //   {
  //     key: '2',
  //     image:
  //       'https://i.pinimg.com/564x/4f/75/a3/4f75a37e3b053109bef8b52156a0b99f.jpg',
  //     product: 'Jacket',
  //     price: '$59.00',
  //     quantity: 1,
  //     total: '$59.00'
  //   },
  //   {
  //     key: '3',
  //     image:
  //       'https://i.pinimg.com/564x/4f/75/a3/4f75a37e3b053109bef8b52156a0b99f.jpg',
  //     product: 'Jacket',
  //     price: '$59.00',
  //     quantity: 1,
  //     total: '$59.00'
  //   }
  // ]
  return (
    <div>
      <HeaderDark />
      <div className='p-12'>
        <div style={{ marginBottom: 24, display: 'flex', gap: '10px' }}>
          <button
            className='text-white px-4 py-2 w-fit rounded-full text-sm bg-orange'
            onClick={() => navigate(PATH.OUTFIT_BUILDER)}
          >
            TRY MIX&MATCH
          </button>
        </div>
        <Table columns={columns} dataSource={data} scroll={{ x: 1200 }} />
      </div>

      <Footer />
    </div>
  )
}

export default MyClosetPage
