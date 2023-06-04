import React, { useEffect, useState } from 'react'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import { Button, Drawer, Form, Input, Pagination, Select } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import Product from '../components/Product'
import AxiosGet from '../config/axiosGet'
import { NotificationCustom } from '../components/Notification'
import DiscoverBanner from '../components/DiscorverBanner'
import { IoIosOptions } from 'react-icons/io'

const DiscoverPage = () => {
  const navigate = useNavigate()

  const [data, setData] = useState([])
  const [filterOptions, setFilterOptions] = useState({})
  const [paging, setPaging] = useState({ size: 20, offset: 0 })
  const [categories, setCategories] = useState([])
  const [styles, setStyles] = useState([])
  const [patterns, setPatterns] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)

  const fetchData = () => {
    AxiosGet('products', {
      offset: paging.offset,
      size: paging.size,
      ...(categories.length && { categories: categories.join(', ') }),
      ...(styles.length && { styles: styles.join(', ') }),
      ...(patterns.length && { patterns: patterns.join(', ') })
    })
      .then((res) => setData(res.data))
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
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
    fetchFilterOptions()
  }, [])

  useEffect(() => {
    fetchData()
  }, [paging, categories, styles, patterns])

  const handlePaging = (page, pageSize) => {
    setPaging({
      offset: (page - 1) * pageSize,
      size: pageSize
    })
  }

  return (
    <div className='w-full'>
      <Drawer
        title='Filters'
        placement='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Form layout='vertical'>
          <Form.Item
            label='Categories'
            name='categories'
            className='min-w-[200px] font-semibold'
          >
            <Select
              mode='multiple'
              placeholder='Jeans'
              className='w-[200px]'
              onChange={(value) => setCategories(value)}
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
              placeholder='Retro'
              className='w-[200px]'
              onChange={(value) => setStyles(value)}
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
              placeholder='In'
              className='w-[200px]'
              onChange={(value) => setPatterns(value)}
            >
              {filterOptions?.patterns?.map((item) => (
                <Select.Option value={item}>{item}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Drawer>

      <HeaderDark />
      <DiscoverBanner />
      <div className='py-10 bg-white'>
        {/* <Form layout='horizontal' className='mt-8'> */}
        <div className='flex flex-wrap gap-4 px-10 md:px-24 mt-10'>
          <button
            className='px-4 py-2 rounded-md bg-[#f2f3f5] hover:bg-[#dcdfe2] flex items-center gap-3 transition-all duration-150'
            onClick={() => setOpenDrawer(true)}
          >
            <IoIosOptions />
            <span>All Filters</span>
          </button>
        </div>
        {/* </Form> */}
      </div>

      <div className='w-full flex flex-col items-center gap-4 bg-white'>
        <div className='text-2xl  font-medium bg-black w-80 text-white py-2 text-center'>
          Discover NEW TREND
        </div>
        <span className='w-20 h-[3px] bg-black'></span>
        <div className='text-base font-light mb-12'>Recently added shirts</div>

        <div className='max-w-screen-xl mx-auto py-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
          {data?.products?.map((item) => (
            <Product
              key={item?.id}
              product={item}
              handleClick={() => navigate(`/outfit-detail/${item?.id}`)}
            />
          ))}
        </div>

        {/* <button className='text-white px-4 py-2 text-base bg-orange my-12'>
          <Link to={PATH.DISCOVER} onClick={handlePaging}>
            FIND OUT MORE
          </Link>
        </button> */}

        <div className='mt-4 mb-6'>
          <Pagination
            defaultCurrent={1}
            total={data.totalRows}
            showSizeChanger={false}
            onChange={handlePaging}
            pageSize={20}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DiscoverPage
