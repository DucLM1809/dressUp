import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { EditorTabs, PATH } from '../constants/common'
import Tab from '../components/Tab'
import { downloadImage, reader } from '../config/helpers'
import FilePicker from '../components/FilePicker'
import { Link } from 'react-router-dom'
import download from '../assets/download.png'
import fileIcon from '../assets/file.png'
import { Upload, message } from 'antd'
import AxiosPost from '../config/axiosPost'
import axios from 'axios'

const OutfitBuilderPage = () => {
  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  })
  const [file, setFile] = useState('')

  const handleDrag = (e, ui) => {
    const { x, y } = state.deltaPosition
    setState({
      ...state,
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
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

  return (
    <div className='bg-gray-200 min-h-screen relative'>
      <button className='text-white px-4 py-2  rounded-md text-base bg-orange my-12 absolute top-2 right-4'>
        <Link to={PATH.HOME}>Go Back</Link>
      </button>

      {/* <Draggable
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
          src={
            'https://i.pinimg.com/564x/cb/ec/c6/cbecc669864071fbcbc98fdc5d34c063.jpg'
          }
        />
      </Draggable> */}

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
        </div>
      </div>

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
