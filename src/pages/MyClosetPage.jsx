import { Button, Image, Modal, Space, Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import { DeleteOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd'
import AxiosGet from '../config/axiosGet'
import { NotificationCustom } from '../components/Notification'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../constants/common'
import AxiosPut from '../config/axiosPut'

const { confirm } = Modal

const MyClosetPage = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const fetchCloset = () => {
    AxiosGet('closets/me')
      .then((res) =>
        setData([...res.data.publicProducts, ...res.data.ownedProducts])
      )
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  useEffect(() => {
    fetchCloset()
  }, [])

  const handleRemoveCloset = (item) => {
    confirm({
      title: 'Confirm',
      content: 'Are you sure you want to remove this outfit?',
      onOk: () => {
        AxiosPut('/closets/me', {
          removedProductIds: [item.id]
        })
          .then(() => {
            NotificationCustom({
              type: 'success',
              message: 'Success',
              description: 'Remove out of closet successfully!'
            })
            fetchCloset()
          })
          .catch((err) =>
            NotificationCustom({
              type: 'error',
              message: 'Error',
              description: err?.response?.data?.detail
            })
          )
      }
    })
  }

  const columns = [
    {
      title: '',
      dataIndex: 'transparentBackgroundImage',
      key: 'transparentBackgroundImage',
      align: 'transparentBackgroundImage',
      render: (transparentBackgroundImage) => (
        <Image src={transparentBackgroundImage} width={150} />
      )
    },
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand'
    },
    {
      title: 'Categories',
      key: 'categories',
      dataIndex: 'categories',
      render: (categories) => categories.join(', ')
    },
    {
      title: 'Pattern',
      key: 'pattern',
      dataIndex: 'pattern'
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, item) => (
        <Space size='middle'>
          <Button onClick={() => navigate(`/outfit-detail/${item?.id}`)}>
            View Details
          </Button>

          <Button
            danger
            className='flex items-center'
            onClick={() => handleRemoveCloset(item)}
          >
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
