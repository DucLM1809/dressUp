import React, { useEffect, useState } from 'react'
import PROFILE from '../assets/profile (2).png'
import FACEBOOK from '../assets/facebook.png'
import TIKTOK from '../assets/tiktok.png'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { PATH } from '../constants/common'
import AxiosGet from '../config/axiosGet'
import { NotificationCustom } from '../components/Notification'
import { Button, Form, Input, Select } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons/lib/icons'
import AxiosPut from '../config/axiosPut'

const ProfilePage = () => {
  const [dataProfile, setDataProfile] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [form] = Form.useForm()

  const handleFetchProfile = () => {
    AxiosGet('users/me')
      .then((res) => setDataProfile(res.data))
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  useEffect(() => {
    handleFetchProfile()
  }, [])

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue(dataProfile)
    }
  }, [isEdit])

  const onFinish = (values) => {
    AxiosPut('users/me', { ...values, styles: values?.styles })
      .then(() => {
        NotificationCustom({
          type: 'success',
          message: 'Success',
          description: 'Register Successfully!'
        })
        setIsEdit(false)
      })
      .then(() => handleFetchProfile())
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  return (
    <div className='w-full'>
      <HeaderDark />

      <Form name='profile' layout='horizontal' onFinish={onFinish} form={form}>
        <div className='flex md:flex-row flex-col p-20 gap-12 md:justify-around justify-center items-center'>
          <img src={PROFILE} className='max-w-[300px] object-contain' />
          <div className='flex flex-col gap-4 h-full'>
            <div>
              <h1 className='font-bold text-3xl flex items-center gap-2'>
                {!isEdit ? (
                  <>
                    {dataProfile?.firstName + dataProfile?.lastName || 'User'}
                  </>
                ) : (
                  <>
                    <Form.Item
                      label='First Name'
                      name='firstName'
                      className='mb-0'
                    >
                      <Input placeholder='First Name' />
                    </Form.Item>
                    <Form.Item
                      label='Last Name'
                      name='lastName'
                      className='mb-0'
                    >
                      <Input placeholder='Last Name' />
                    </Form.Item>
                  </>
                )}{' '}
                {isEdit ? (
                  <>
                    <Button
                      className='flex items-center w-[48px] text-green-500'
                      form='profile'
                      htmlType='submit'
                    >
                      <CheckOutlined />{' '}
                    </Button>
                    <Button
                      className='flex items-center w-[48px] text-red-600'
                      onClick={() => setIsEdit(false)}
                    >
                      <CloseOutlined />{' '}
                    </Button>
                  </>
                ) : (
                  <Button
                    className='flex items-center w-[48px] text-blue-500'
                    onClick={() => setIsEdit(true)}
                  >
                    <EditOutlined />{' '}
                  </Button>
                )}
              </h1>
            </div>

            <span className='font-semibold'>
              {!isEdit ? (
                <>
                  Height:{' '}
                  <span className='font-normal'>{dataProfile?.height}</span>{' '}
                </>
              ) : (
                <Form.Item
                  name='height'
                  label='Height'
                  className='w-[200px] mt-4'
                >
                  <Input placeholder='180cm' />
                </Form.Item>
              )}
            </span>
            <span className='font-semibold'>
              {!isEdit ? (
                <>
                  Weight:{' '}
                  <span className='font-normal'>{dataProfile?.weight}</span>
                </>
              ) : (
                <Form.Item name='weight' label='Weight' className='w-[200px]'>
                  <Input placeholder='60kg' />
                </Form.Item>
              )}
            </span>
            <span className='font-semibold'>
              {!isEdit ? (
                <>
                  {' '}
                  Body:{' '}
                  <span className='font-normal'>
                    {dataProfile?.burst || ''}
                    {' - '}
                    {dataProfile?.waist || ''}
                    {' - '}
                    {dataProfile?.hip || ''}
                  </span>
                </>
              ) : (
                <div className='flex gap-2'>
                  Body:
                  <Form.Item name='burst' className='w-[100px]'>
                    <Input placeholder='Bust' />
                  </Form.Item>
                  <Form.Item name='waist' className='w-[100px]'>
                    <Input placeholder='Waist' />
                  </Form.Item>
                  <Form.Item name='hip' className='w-[100px]'>
                    <Input placeholder='Hip' />
                  </Form.Item>
                </div>
              )}
            </span>
            <span className='font-semibold'>
              {!isEdit ? (
                <>
                  {' '}
                  Style:{' '}
                  <span className='font-normal'>
                    {dataProfile?.styles?.join(', ')}
                  </span>
                </>
              ) : (
                <Form.Item name='styles' label='Style' className='w-[200px]'>
                  <Select mode='tags' placeholder='Korea' />
                </Form.Item>
              )}
            </span>
            <div className='flex gap-4'>
              <img src={FACEBOOK} className='w-[30px]' />
              <img src={TIKTOK} className='w-[30px]' />
            </div>
            <div className='flex md:flex-row flex-col gap-4 h-fit'>
              <button className='text-white px-4 py-2 w-full md:w-fit rounded-full text-sm bg-orange my-4'>
                <Link to={PATH.MY_CLOSET}>MY CLOSET</Link>
              </button>
              <button className='text-white px-4 py-2 w-full  md:w-fit rounded-full text-sm bg-orange my-4'>
                TRY MIX&MATCH
              </button>
            </div>
          </div>
        </div>
      </Form>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default ProfilePage
