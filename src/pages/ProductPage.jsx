import {
  Button,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Select,
  Table,
  Tabs
} from 'antd'
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
  const [dataCustomer, setDataCustomer] = useState([])
  const [dataProduct, setDataProduct] = useState([])
  const [dataShop, setDataShop] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
  const [isAddCustomer, setIsAddCustomer] = useState(false)
  const [isAddShop, setIsAddShop] = useState(false)
  const [isAddProduct, setIsAddProduct] = useState(false)
  const navigate = useNavigate()

  const fetchCustomer = () => {
    AxiosGet('Customer/customer')
      .then((res) => setDataCustomer(res.data))
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  const fetchShop = () => {
    AxiosGet('Shop')
      .then((res) => setDataShop(res.data))
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  const fetchProduct = () => {
    AxiosGet('Product/product')
      .then((res) => setDataProduct(res.data))
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  useEffect(() => {
    fetchCustomer()
    fetchShop()
    fetchProduct()
  }, [])

  const columnsCustomer = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
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
    isAddCustomer &&
      AxiosPost('Customer/addrange', {
        customerDtos: [{ ...values, id: 0 }]
      })
        .then(() => {
          form.resetFields()
          setOpenDrawer(false)
          fetchCustomer()
          NotificationCustom({
            type: 'success',
            message: 'Success',
            description: 'Save successfully!'
          })
        })
        .catch((err) =>
          NotificationCustom({
            type: 'error',
            message: 'Error',
            description: err?.response?.data?.detail
          })
        )

    isAddShop &&
      AxiosPost('Shop/addrange', {
        shopDtos: [{ ...values, id: 0 }]
      })
        .then(() => {
          form.resetFields()
          setOpenDrawer(false)
          fetchShop()
          NotificationCustom({
            type: 'success',
            message: 'Success',
            description: 'Save successfully!'
          })
        })
        .catch((err) =>
          NotificationCustom({
            type: 'error',
            message: 'Error',
            description: err?.response?.data?.detail
          })
        )

    isAddProduct &&
      AxiosPost('Product/addrange', {
        productDtos: [{ ...values, id: 0 }]
      })
        .then(() => {
          form.resetFields()
          setOpenDrawer(false)
          fetchProduct()
          NotificationCustom({
            type: 'success',
            message: 'Success',
            description: 'Save successfully!'
          })
        })
        .catch((err) =>
          NotificationCustom({
            type: 'error',
            message: 'Error',
            description: err?.response?.data?.detail
          })
        )
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
              key: 'customer',
              children: (
                <Table
                  columns={columnsCustomer}
                  dataSource={dataCustomer}
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
                  dataSource={dataShop}
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
                  dataSource={dataProduct}
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
          {isAddCustomer && (
            <>
              <Form.Item
                label='Full Name'
                name='fullName'
                rules={[
                  {
                    required: true,
                    message: 'Please enter full name.'
                  }
                ]}
                requiredMark
              >
                <Input size='large' />
              </Form.Item>

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

              <Form.Item label='DOB' name='dob'>
                <DatePicker picker={'date'} size='large' />
              </Form.Item>
            </>
          )}

          {isAddShop && (
            <>
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
              <Form.Item label='Location' name='location'>
                <Input size='large' />
              </Form.Item>
            </>
          )}

          {isAddProduct && (
            <>
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
                <InputNumber size='large' min={0} />
              </Form.Item>
              <Form.Item
                label='Shop'
                name='shopId'
                rules={[
                  {
                    required: true,
                    message: 'Please choose shop.'
                  }
                ]}
                requiredMark
              >
                <Select>
                  {dataShop?.map((item) => (
                    <Select.Option value={item.id}>{item.name}</Select.Option>
                  ))}
                </Select>
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
