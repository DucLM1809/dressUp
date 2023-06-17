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
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'

const ProductPage = () => {
  const [form] = Form.useForm()
  const [dataCustomer, setDataCustomer] = useState([])
  const [dataProduct, setDataProduct] = useState([])
  const [dataShop, setDataShop] = useState([])
  const [data, setData] = useState([])
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

  const fetchJoin = () => {
    AxiosGet('/Home/cust-prod-shop')
      .then((res) => {
        setData(res.data)
        if (res.data.length === 0) {
          NotificationCustom({
            type: 'error',
            message: 'Error',
            description: 'Not enough data'
          })
        }
      })
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
    fetchJoin()
  }, [])

  const columnsJoin = [
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      render: (_, record) => {
        return `${record?.customerName} - ${record?.customerEmail}`
      }
    },
    {
      title: 'Shop',
      dataIndex: 'shop',
      key: 'shop',
      render: (_, record) => {
        return `${record?.shopName} - ${record?.shopLocation}`
      }
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: (_, record) => {
        return `${record?.productName} - ${record?.productPrice}`
      }
    }
  ]

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
        ...values
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
        ...values
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
        ...values
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
            },
            {
              label: 'General',
              key: 'general',
              children: (
                <Table
                  columns={columnsJoin}
                  dataSource={data}
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
          layout='horizontal'
          form={form}
          name='management'
          onFinish={onFinish}
        >
          <Form.List
            name={`${
              isAddCustomer
                ? 'customerDtos'
                : isAddShop
                ? 'shopDtos'
                : isAddProduct
                ? 'productDtos'
                : ''
            }`}
            initialValue={[{}]}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <div className='flex flex-col'>
                    <Form.Item
                      name={[field.name, 'id']}
                      initialValue={0}
                      hidden
                    ></Form.Item>
                    <div className='flex justify-between'>
                      {isAddCustomer && (
                        <>
                          <Form.Item
                            label='Full Name'
                            name={[field.name, 'fullName']}
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
                            name={[field.name, 'email']}
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
                            name={[field.name, 'name']}
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
                            label='Location'
                            name={[field.name, 'location']}
                          >
                            <Input size='large' />
                          </Form.Item>
                        </>
                      )}

                      {isAddProduct && (
                        <>
                          <Form.Item
                            label='Name'
                            name={[field.name, 'name']}
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
                            name={[field.name, 'price']}
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
                                <Select.Option value={item.id}>
                                  {item.name}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </>
                      )}
                    </div>

                    <Button
                      type='dashed'
                      danger
                      onClick={() => {
                        remove(field.name)
                      }}
                      block
                      size={'large'}
                      icon={<MinusCircleOutlined />}
                      disabled={fields.length === 1}
                      style={{ marginBottom: '1rem' }}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  type='dashed'
                  onClick={() => {
                    add()
                  }}
                  block
                  size={'large'}
                  icon={<PlusCircleOutlined />}
                  style={{ margin: 0, marginTop: '1rem', marginBottom: '1rem' }}
                >
                  Add
                </Button>
              </>
            )}
          </Form.List>

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
