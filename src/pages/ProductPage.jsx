import { Button, DatePicker, Drawer, Form, Input, Table, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import AxiosGet from '../config/axiosGet'
import { NotificationCustom } from '../components/Notification'
import { useNavigate } from 'react-router-dom'
import customerIcon from '../assets/customer.png'
import storeIcon from '../assets/store.png'
import outfitIcon from '../assets/logo-tshirt.png'
import AxiosPost from '../config/axiosPost'

const ProductPage = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
  const [isAddCustomer, setIsAddCustomer] = useState(false)
  const [isAddShop, setIsAddShop] = useState(false)
  const [isAddProduct, setIsAddProduct] = useState(false)
  const [fileList, setFileList] = useState([])
  const navigate = useNavigate()

  const fetchCloset = () => {
    AxiosGet('closets/me')
      .then((res) => setData(res.data))
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

  const columnsCustomer = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'dob'
    }
  ]

  const columnsShop = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location'
    }
  ]

  const columnsProduct = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    }
  ]

  const onFinish = (values) => {
    console.log(values)
    // AxiosPost('/products', {
    //   ...values,

    // })
    //   .then(() => {
    //     form.resetFields()
    //     setFileList([])
    //     setOpenDrawer(false)
    //     fetchCloset()
    //     NotificationCustom({
    //       type: 'success',
    //       message: 'Success',
    //       description: 'Save outfit to your closet successfully!'
    //     })
    //   })
    //   .catch((err) =>
    //     NotificationCustom({
    //       type: 'error',
    //       message: 'Error',
    //       description: err?.response?.data?.detail
    //     })
    //   )
  }

  return (
    <div>
      <HeaderDark />

      <div className='p-12'>
        <div style={{ marginBottom: 24, display: 'flex', gap: '10px' }}>
          <div
            key='customer'
            className={`w-11 h-11 cursor-pointer rounded-4 border rounded-md hover:border-blue-400 duration-150`}
            // style={activeStyles}
            onClick={() => {
              setOpenDrawer(true)
              setIsAddCustomer(true)
            }}
          >
            <img
              src={customerIcon}
              alt={'customer'}
              className={'object-contain'}
            />
          </div>
          <div
            key='shop'
            className={`w-11 h-11 cursor-pointer rounded-4 border rounded-md hover:border-blue-400 duration-150`}
            // style={activeStyles}
            onClick={() => {
              setOpenDrawer(true)
              setIsAddShop(true)
            }}
          >
            <img src={storeIcon} alt={'shop'} className={'object-contain'} />
          </div>
          <div
            key='product'
            className={`w-11 h-11 cursor-pointer rounded-4 border rounded-md hover:border-blue-400 duration-150`}
            // style={activeStyles}
            onClick={() => {
              setOpenDrawer(true)
              setIsAddProduct(true)
            }}
          >
            <img
              src={outfitIcon}
              alt={'product'}
              className={'object-contain'}
            />
          </div>
        </div>
        <Tabs
          type='card'
          items={[
            {
              label: 'Customers',
              key: 'public',
              children: (
                <Table
                  columns={columnsCustomer}
                  dataSource={data.publicProducts}
                  scroll={{ x: 1200 }}
                />
              )
            },
            {
              label: 'Shop',
              key: 'shop',
              children: (
                <Table
                  columns={columnsShop}
                  dataSource={data.ownedProducts}
                  scroll={{ x: 1200 }}
                />
              )
            },
            {
              label: 'Product',
              key: 'product',
              children: (
                <Table
                  columns={columnsProduct}
                  dataSource={data.ownedProducts}
                  scroll={{ x: 1200 }}
                />
              )
            }
          ]}
        />
      </div>

      <Drawer
        title={`Add ${isAddCustomer ? 'Customer' : ''} ${
          isAddShop ? 'Shop' : ''
        } ${isAddProduct ? 'Product' : ''}`}
        placement='right'
        onClose={() => {
          setIsAddCustomer(false)
          setIsAddProduct(false)
          setIsAddShop(false)
          setOpenDrawer(false)
        }}
        open={openDrawer}
        width={
          window.innerWidth <= 1024 ? window.innerWidth : window.innerWidth / 2
        }
      >
        <Form
          layout='vertical'
          form={form}
          name='management'
          onFinish={onFinish}
        >
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please enter name.'
              }
            ]}
            requiredMark
          >
            <Input size='large' />
          </Form.Item>

          {isAddCustomer && (
            <>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please enter email.'
                  }
                ]}
                requiredMark
              >
                <Input size='large' />
              </Form.Item>

              <Form.Item
                label='DOB'
                name='dob'
                rules={[
                  {
                    required: true,
                    message: 'Please enter dob.'
                  }
                ]}
                requiredMark
              >
                <DatePicker picker={'date'} size='large' />
              </Form.Item>
            </>
          )}

          {isAddShop && (
            <>
              <Form.Item
                label='Location'
                name='location'
                rules={[
                  {
                    required: true,
                    message: 'Please enter location.'
                  }
                ]}
                requiredMark
              >
                <Input size='large' />
              </Form.Item>
            </>
          )}

          {isAddProduct && (
            <>
              <Form.Item
                label='Price'
                name='price'
                rules={[
                  {
                    required: true,
                    message: 'Please enter price.'
                  }
                ]}
                requiredMark
              >
                <Input size='large' />
              </Form.Item>
            </>
          )}

          <Button
            type='primary'
            className='float-right'
            form='management'
            htmlType='submit'
          >
            Save
          </Button>
        </Form>
      </Drawer>

      <Footer />
    </div>
  )
}

export default ProductPage
