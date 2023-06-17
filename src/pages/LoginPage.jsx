import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const LoginPage = () => {
  const onFinish = (values) => {
    console.log(values)
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
