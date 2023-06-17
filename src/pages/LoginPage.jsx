import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { LOCAL_STORAGE_ITEMS, PATH } from '../constants/common'
import { NotificationCustom } from '../components/Notification'
import AxiosPost from '../config/axiosPost'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const res = await AxiosPost('Home/login', { ...values })
      if (res) {
        console.log(res)
        localStorage.setItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN, res.data?.token)
        if (values.email === 'admin@gmail.com') {
          localStorage.setItem('role', 'ADMIN')
        } else {
          localStorage.setItem('role', 'USER')
        }
        NotificationCustom({
          type: 'success',
          message: 'Success',
          description: 'Login successfully!'
        })
        navigate(PATH.PRODUCT)
      }
    } catch (error) {
      NotificationCustom({
        type: 'Error',
        message: 'Success'
      })
    }
  }

  return (
    <div className='flex items-center justify-center w-full h-[100vh]'>
      <Form name='login' onFinish={onFinish} className='login-form'>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your email!'
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Email'
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href=''>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in
          </Button>
          Or <a href=''>register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginPage
