import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import { EditorTabs, PATH } from '../constants/common'
import Tab from '../components/Tab'
import { downloadImage, reader } from '../config/helpers'
import FilePicker from '../components/FilePicker'
import { Link, useNavigate } from 'react-router-dom'
import download from '../assets/download.png'
import closetIcon from '../assets/closet.png'
import shirtIcon from '../assets/stylish-tshirt.png'
import {
  Drawer,
  Modal,
  Pagination,
  Upload,
  message,
  Button,
  Input,
  Form,
  Select
} from 'antd'
import AxiosPost from '../config/axiosPost'
import axios from 'axios'
import { NotificationCustom } from '../components/Notification'
import AxiosGet from '../config/axiosGet'
import Product from '../components/Product'
import Lottie from 'lottie-react'
import { IoIosOptions } from 'react-icons/io'
import aiAnimated from '../assets/ai-animated.json'
import aiIcon from '../assets/ai.png'
import refreshIcon from '../assets/refresh.png'

const { Search } = Input

const OutfitBuilderPage = () => {
  const navigate = useNavigate()
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
  const [openDrawerFilter, setOpenDrawerFilter] = useState(false)
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState(new Map())
  const [paging, setPaging] = useState({ size: 20, offset: 0 })
  const [isFromPublic, setIsFromPublic] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [categoriesSelect, setCategoriesSelect] = useState([])
  const [stylesSelect, setStylesSelect] = useState([])
  const [patternsSelect, setPatternsSelect] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [text, setText] = useState('')
  const [fullText, setFullText] = useState(
    'Our sophisticated artificial intelligence proffers fashion recommendations derived from garments you have meticulously uploaded onto your virtual wardrobe...'
  )
  const [index, setIndex] = useState(0)
  const [filterOptions, setFilterOptions] = useState({})

  const fetchProducts = () => {
    const params = new URLSearchParams()
    params.append('offset', paging.offset)
    params.append('size', paging.size)
    searchKeyword && params.append('search_keyword', searchKeyword)
    categoriesSelect.length > 0 &&
      categoriesSelect.map((category) => params.append('categories', category))

    stylesSelect.length > 0 &&
      stylesSelect.map((style) => params.append('styles', style))

    patternsSelect.length > 0 &&
      patternsSelect.map((pattern) => params.append('patterns', pattern))

    AxiosGet('products', params)
      .then((res) => setProducts(res.data))
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  const fetchClosets = () => {
    AxiosGet('closets/me')
      .then((res) =>
        setProducts([...res.data.ownedProducts, ...res.data.publicProducts])
      )
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  const fetchRecommend = (isPublic) => {
    AxiosGet('/products/recommendation', {
      include_public_products: isPublic
    }).then((res) => {
      setProducts(res.data)
      setOpenModal(false)
    })
  }

  const onSearch = (e) => {
    setSearchKeyword(e.target.value)
  }

  const fetchFilterOptions = () => {
    AxiosGet('products/filter-options')
      .then((res) => setFilterOptions(res.data))
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  useEffect(() => {
    isFromPublic && fetchProducts()
    isFromPublic && fetchFilterOptions()
    !isFromPublic && fetchClosets()
  }, [paging, isFromPublic, categoriesSelect, stylesSelect, patternsSelect])

  const handlePaging = (page, pageSize) => {
    setPaging({
      offset: page,
      size: pageSize
    })
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      isFromPublic && fetchProducts()
    }, 300)

    return () => {
      clearTimeout(timeOut)
    }
  }, [isFromPublic, searchKeyword])

  useEffect(() => {
    if (openModal && index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 20)
    }

    if (!openModal) {
      setIndex(0)
      setText('')
    }
  }, [index, openModal])

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
      <Modal
        open={openModal}
        footer={null}
        onCancel={() => setOpenModal(false)}
      >
        <Lottie animationData={aiAnimated} loop={true} />
        <div className='flex items-center justify-around'>
          <Button
            type='primary'
            onClick={() => {
              fetchRecommend(false)
            }}
          >
            Recommend without public
          </Button>
          <Button
            onClick={() => {
              fetchRecommend(true)
            }}
          >
            Recommend with public
          </Button>
        </div>
        <div class='text-base font-medium mt-5 tracking-wider'>{text}</div>
      </Modal>

      <button
        className='text-white px-4 py-2  rounded-md text-base bg-orange my-12 absolute top-2 right-4'
        onClick={() => navigate(-1)}
      >
        Go Back
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

      {Array.from(selectedProducts.values()).map((product, index) => (
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
            src={product}
            style={{
              zIndex: index
            }}
          />
        </Draggable>
      ))}

      <div className='absolute top-1/2 -translate-y-1/2'>
        <div className='editortabs-container tabs'>
          {/* {EditorTabs.map((tab) => (
            <Tab key={tab.name} tab={tab} />
          ))}

          {generateTabContent()} */}
          {/* <Upload
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
          </Upload> */}
          <div
            key='closetPicker'
            className={`tab-btn rounded-4`}
            // style={activeStyles}
          >
            <img
              src={closetIcon}
              alt={'closetPicker'}
              className={'w-11/12 h-11/12 object-contain'}
              onClick={() => {
                setOpenDrawer(true)
                setIsFromPublic(false)
              }}
            />
          </div>
          <div
            key='productPicker'
            className={`tab-btn rounded-4`}
            // style={activeStyles}
          >
            <img
              src={shirtIcon}
              alt={'productPicker'}
              className={'w-11/12 h-11/12 object-contain'}
              onClick={() => {
                setOpenDrawer(true)
                setIsFromPublic(true)
              }}
            />
          </div>
        </div>
      </div>

      <Drawer
        title='Choose Outfits'
        placement='right'
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        width={
          window.innerWidth <= 1024 ? window.innerWidth : window.innerWidth / 2
        }
      >
        {isFromPublic && (
          <div className='flex gap-4 mt-2 items-center'>
            <button
              className='px-4 py-2 rounded-md bg-[#f2f3f5] hover:bg-[#dcdfe2] flex items-center gap-3 transition-all duration-150'
              onClick={() => setOpenDrawerFilter(true)}
            >
              <IoIosOptions />
              <span>All Filters</span>
            </button>
            <div
              className={`w-11 h-11 cursor-pointer rounded-4 border rounded-md hover:border-blue-400 duration-150`}
              // style={activeStyles}
              onClick={() => setOpenModal(true)}
            >
              <img src={aiIcon} alt={'aipicker'} className={'object-contain'} />
            </div>
            <div
              className={`w-11 h-11 p-1 cursor-pointer rounded-4 border rounded-md hover:border-blue-400  duration-150`}
              // style={activeStyles}
              onClick={() => fetchProducts()}
            >
              <img
                src={refreshIcon}
                alt={'aipicker'}
                className={'object-contain'}
              />
            </div>
            <Search
              placeholder='input search text'
              // onSearch={onSearch}
              onChange={onSearch}
              style={{ width: 200 }}
              size='large'
            />
          </div>
        )}

        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-2 gap-10'>
          {!isFromPublic &&
            products?.length >= 0 &&
            products?.map((item) => (
              <Product
                key={item.id}
                product={item}
                handleClick={() => handleClick(item)}
              />
            ))}

          {isFromPublic &&
            products?.products?.map((item) => (
              <Product
                key={item.id}
                product={item}
                handleClick={() => handleClick(item)}
              />
            ))}
        </div>
        {isFromPublic && (
          <div className='flex justify-center'>
            <Pagination
              defaultCurrent={1}
              total={products.totalRows}
              showSizeChanger={false}
              onChange={handlePaging}
              pageSize={20}
            />
          </div>
        )}
      </Drawer>

      <Drawer
        title='Filters'
        placement='left'
        open={openDrawerFilter}
        onClose={() => setOpenDrawerFilter(false)}
      >
        <Form layout='vertical'>
          <Form.Item
            label='Categories'
            name='categories'
            className='min-w-[200px] font-medium'
          >
            <Select
              mode='multiple'
              maxTagCount={'responsive'}
              placeholder='Jeans'
              className='w-[200px]'
              onChange={(value) => setCategoriesSelect(value)}
            >
              {filterOptions?.categories?.map((item) => (
                <Select.Option value={item}>{item}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label='Styles'
            name='styles'
            className='min-w-[200px] font-semibold'
          >
            <Select
              mode='multiple'
              maxTagCount={'responsive'}
              placeholder='Retro'
              className='w-[200px]'
              onChange={(value) => setStylesSelect(value)}
            >
              {filterOptions?.styles?.map((item) => (
                <Select.Option value={item}>{item}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label='Patterns'
            name='patterns'
            className='min-w-[200px] font-semibold'
          >
            <Select
              mode='multiple'
              maxTagCount={'responsive'}
              placeholder='In'
              className='w-[200px]'
              onChange={(value) => setPatternsSelect(value)}
            >
              {filterOptions?.patterns?.map((item) => (
                <Select.Option value={item}>{item}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
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
