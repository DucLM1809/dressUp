import React, { useEffect, useState } from 'react'
import PROFILE from '../assets/defaultAvt.jpg'
import FACEBOOK from '../assets/facebook.png'
import TIKTOK from '../assets/tiktok.png'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { PATH } from '../constants/common'
import AxiosGet from '../config/axiosGet'
import { NotificationCustom } from '../components/Notification'
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Select,
  Upload,
  message
} from 'antd'
import { EditOutlined } from '@ant-design/icons'
import {
  CheckOutlined,
  CloseOutlined,
  PlusOutlined
} from '@ant-design/icons/lib/icons'
import AxiosPut from '../config/axiosPut'
import AxiosPost from '../config/axiosPost'
import axios from 'axios'

const uploadButton = (
  <div>
    <EditOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
)

const ProfilePage = () => {
  const [dataProfile, setDataProfile] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])
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
      form.setFieldsValue({ ...dataProfile, styles: dataProfile?.styles || [] })
    }
  }, [isEdit])

  const onFinish = (values) => {
    AxiosPut('users/me', {
      ...values,
      styles: values?.styles,
      ...(fileList.length > 0 && {
        avatarUrl: process.env.REACT_APP_IMAGE_URI + fileList[0]?.name
      })
    })
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

  const onChangeUploadFile = (info) => {
    setFileList(info.fileList)
  }

  const handleUploadFile = async (options) => {
    const { onSuccess, onError, file, onProgress } = options
    try {
      let res = await AxiosPost('auth/presigned-urls/post', {
        object_name: file.name
      })
      const formData = new FormData()
      Object.entries(res.data.fields).forEach(([key, value]) => {
        formData.append(key, value)
      })
      formData.append('file', file)

      res = await axios.postForm(res.data.url, formData)

      if (res) {
        message.success(`${file.name} file uploaded successfully`)
      } else {
        message.error(`${file.name} file upload failed.`)
      }

      onSuccess('Ok')
      console.log('server res: ', res)
    } catch (error) {
      console.log('Eroor: ', error)
      onError({ error })
    }
  }

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    )
  }

  return (
    <div className='w-full'>
      <HeaderDark />

      <Form name='profile' layout='horizontal' onFinish={onFinish} form={form}>
        <div className='flex md:flex-row flex-col p-20 gap-12  justify-center items-center relative'>
          {!isEdit ? (
            <Image
              src={dataProfile?.avatarUrl ? dataProfile?.avatarUrl : PROFILE}
              className='max-w-[300px] object-contain'
            />
          ) : (
            <>
              <Upload
                name='file'
                accept='image/*'
                onChange={onChangeUploadFile}
                customRequest={handleUploadFile}
                listType='picture-card'
                fileList={fileList}
                onPreview={handlePreview}
                multiple={true}
                className='max-w-[300px]'
                maxCount={1}
              >
                {uploadButton}
              </Upload>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt='example'
                  style={{ width: '100%' }}
                  src={previewImage}
                />
              </Modal>
            </>
          )}

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
                  <span className='font-normal'>
                    {dataProfile?.height + (dataProfile?.height ? ' cm' : '')}
                  </span>{' '}
                </>
              ) : (
                <Form.Item
                  name='height'
                  label='Height'
                  className='w-[200px] mt-4'
                >
                  <Input placeholder='180cm' addonAfter='cm' />
                </Form.Item>
              )}
            </span>
            <span className='font-semibold'>
              {!isEdit ? (
                <>
                  Weight:{' '}
                  <span className='font-normal'>
                    {dataProfile?.weight + (dataProfile?.weight ? ' cm' : '')}
                  </span>
                </>
              ) : (
                <Form.Item name='weight' label='Weight' className='w-[200px]'>
                  <Input placeholder='60kg' addonAfter='kg' />
                </Form.Item>
              )}
            </span>
            <span className='font-semibold'>
              {!isEdit ? (
                <>
                  {' '}
                  Body:{' '}
                  <span className='font-normal'>
                    {dataProfile?.bust + 'cm' || ''}
                    {' - '}
                    {dataProfile?.waist + 'cm' || ''}
                    {' - '}
                    {dataProfile?.hip + 'cm' || ''}
                  </span>
                </>
              ) : (
                <div className='flex gap-2'>
                  Body:
                  <Form.Item name='bust' className='w-[100px]'>
                    <Input placeholder='Bust' addonAfter='cm' />
                  </Form.Item>
                  <Form.Item name='waist' className='w-[100px]'>
                    <Input placeholder='Waist' addonAfter='cm' />
                  </Form.Item>
                  <Form.Item name='hip' className='w-[100px]'>
                    <Input placeholder='Hip' addonAfter='cm' />
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
                <Form.Item
                  name='styles'
                  label='Style'
                  className='w-[200px]'
                  initialValue={dataProfile?.styles || []}
                >
                  <Select mode='tags' placeholder='Korea' />
                </Form.Item>
              )}
            </span>
            <div className='flex gap-4'>
              <img src={FACEBOOK} className='w-[30px]' />
              <img src={TIKTOK} className='w-[30px]' />
            </div>
          </div>
        </div>
      </Form>
      <div className='flex md:flex-row flex-col gap-4 h-fit md:justify-center items-center'>
        <Link to={PATH.MY_CLOSET}>
          <button
            className='text-white px-4 py-2 w-[200px] md:w-fit rounded-full text-sm bg-orange my-4'
            onClick={(e) => e.stopPropagation()}
          >
            MY CLOSET
          </button>
        </Link>
        <Link to={PATH.OUTFIT_BUILDER}>
          <button
            className='text-white px-4 py-2 w-[200px]  md:w-fit rounded-full text-sm bg-orange my-4'
            onClick={(e) => e.stopPropagation()}
          >
            TRY MIX&MATCH
          </button>
        </Link>
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default ProfilePage
