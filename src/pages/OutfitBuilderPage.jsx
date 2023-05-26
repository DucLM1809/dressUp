import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import { EditorTabs, PATH } from '../constants/common'
import Tab from '../components/Tab'
import { downloadImage, reader } from '../config/helpers'
import FilePicker from '../components/FilePicker'
import { Link } from 'react-router-dom'
import download from '../assets/download.png'
import fileIcon from '../assets/file.png'
import shirtIcon from '../assets/stylish-tshirt.png'
import { Drawer, Upload, message } from 'antd'
import AxiosPost from '../config/axiosPost'
import axios from 'axios'
import { NotificationCustom } from '../components/Notification'
import AxiosGet from '../config/axiosGet'
import Product from '../components/Product'

const OutfitBuilderPage = () => {
  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  })
  const [file, setFile] = useState('')
  const [fileList, setFileList] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
  const [paging, setPaging] = useState({ size: 20, offset: 0 })
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState(new Map())

  const fetchProducts = () => {
    AxiosGet('products', { size: paging.size })
      .then((res) => setProducts(res.data))
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  useEffect(() => {
    openDrawer && fetchProducts()
  }, [openDrawer])

  const handleDrag = (e, ui) => {
    const { x, y } = state.deltaPosition
    setState({
      ...state,
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    })
  }

  const handleStart = () => {
    setState({ ...state, activeDrags: ++state.activeDrags })
  }

  const handleStop = () => {
    setState({ ...state, activeDrags: --state.activeDrags })
  }

  const generateTabContent = () => {
    return <FilePicker file={file} setFile={setFile} readFile={readFile} />
  }

  const readFile = (type) => {
    reader(file).then((result) => {
      // setActiveEditorTab('')
    })
  }

  const onChangeUploadFile = (info) => {
    if (info.file.status === 'done') {
      setFileList([...fileList, info.file])
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
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

      onSuccess('Ok')
      console.log('server res: ', res)
    } catch (error) {
      console.log('Eroor: ', error)
      onError({ error })
    }
  }

  const handleClick = (item) => {
    if (!selectedProducts.get(item.id)) {
      const newSelectedProducts = new Map(selectedProducts).set(
        item.id,
        item.transparentBackgroundImage
      )

      setSelectedProducts(newSelectedProducts)
    } else {
      const newSelectedProducts = new Map(selectedProducts)
      newSelectedProducts.delete(item.id)
      setSelectedProducts(newSelectedProducts)
    }
  }

  return (
    <div className='bg-gray-200 min-h-screen relative'>
      <button className='text-white px-4 py-2  rounded-md text-base bg-orange my-12 absolute top-2 right-4'>
        <Link to={PATH.HOME}>Go Back</Link>
      </button>

      {fileList.map((item) => (
        <Draggable
          handle='.handle'
          defaultPosition={{
            x: window.innerWidth / 2 - 200,
            y: window.innerHeight / 4
          }}
          position={null}
          scale={1}
          onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleStop}
        >
          <img
            className='handle max-w-[300px] max-h-[300px]'
            src={`${process.env.REACT_APP_IMAGE_URI}${item?.name}`}
          />
        </Draggable>
      ))}

      {Array.from(selectedProducts.values()).map((product) => (
        <Draggable
          handle='.handle'
          defaultPosition={{
            x: window.innerWidth / 2 - 200,
            y: window.innerHeight / 4
          }}
          position={null}
          scale={1}
          onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleStop}
        >
          <img className='handle max-w-[300px] max-h-[300px]' src={product} />
        </Draggable>
      ))}

      <div className='absolute top-1/2 -translate-y-1/2'>
        <div className='editortabs-container tabs'>
          {/* {EditorTabs.map((tab) => (
            <Tab key={tab.name} tab={tab} />
          ))}

          {generateTabContent()} */}
          <Upload
            name='file'
            accept='image/*'
            onChange={onChangeUploadFile}
            showUploadList={false}
            customRequest={handleUploadFile}
          >
            <div
              key='filepicker'
              className={`tab-btn rounded-4`}
              // style={activeStyles}
            >
              <img
                src={fileIcon}
                alt={'filepicker'}
                className={'w-11/12 h-11/12 object-contain'}
              />
            </div>
          </Upload>

          <div
            key='productPicker'
            className={`tab-btn rounded-4`}
            // style={activeStyles}
          >
            <img
              src={shirtIcon}
              alt={'productPicker'}
              className={'w-11/12 h-11/12 object-contain'}
              onClick={() => setOpenDrawer(true)}
            />
          </div>
        </div>
      </div>

      <Drawer
        title='Basic Drawer'
        placement='right'
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        width={
          window.innerWidth <= 1024 ? window.innerWidth : window.innerWidth / 2
        }
      >
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-2 gap-10'>
          {products.map((item) => (
            <Product
              key={item.id}
              product={item}
              handleClick={() => handleClick(item)}
            />
          ))}
        </div>
      </Drawer>

      {/* <div className='filtertabs-container'>
        <button className='download-btn' onClick={downloadImage}>
          <img
            src={download}
            alt='download_image'
            className='w-3/5 h-3/5 object-contain'
          />
        </button>
      </div> */}
    </div>
  )
}

export default OutfitBuilderPage
