import React, { useEffect, useState } from 'react'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import { Form, Input, Select } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import Product from '../components/Product'
import AxiosGet from '../config/axiosGet'
import { NotificationCustom } from '../components/Notification'
const { Search } = Input

const DiscoverPage = () => {
  const navigate = useNavigate()

  const [data, setData] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [findShop, setFindShop] = useState()
  const [dataShop, setDataShop] = useState([])

  const fetchData = () => {
    AxiosGet('Product/product', {
      ...(searchKeyword && { searchStr: searchKeyword }),
      ...(findShop && { shopId: findShop })
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

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchData()
    }, 300)

    return () => {
      clearTimeout(timeOut)
    }
  }, [searchKeyword])

  useEffect(() => {
    fetchData()
  }, [findShop])

  useEffect(() => {
    fetchData()
    fetchShop()
  }, [])

  const onSearch = (e) => {
    setSearchKeyword(e.target.value)
  }

  return (
    <div className='w-full'>
      <HeaderDark />
      <div className='py-10 bg-white'>
        <Form layout='horizontal' className='mt-8'>
          <div className='flex flex-wrap gap-4 px-10 md:px-24 mt-10 items-center'>
            <Search
              placeholder='input search text'
              // onSearch={onSearch}
              onChange={onSearch}
              style={{ width: 200 }}
              size='large'
            />
            <Select
              size='large'
              style={{ width: 200 }}
              placeholder='Choose Shop'
              onChange={(value) => setFindShop(value)}
              allowClear
            >
              {dataShop?.map((item) => (
                <Select.Option value={item.id}>{item.name}</Select.Option>
              ))}
            </Select>
          </div>
        </Form>
      </div>

      <div className='w-full flex flex-col items-center gap-4 bg-white'>
        <div className='text-2xl  font-medium bg-black w-80 text-white py-2 text-center'>
          Discover Product
        </div>
        <span className='w-20 h-[3px] bg-black'></span>
        {/* <div className='text-base font-light mb-12'>Recently added shirts</div> */}

        <div className='max-w-screen-xl mx-auto py-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
          {data?.map((item) => (
            <Product
              key={item?.id}
              product={item}
              // handleClick={() => navigate(`/outfit-detail/${item?.id}`)}
            />
          ))}
        </div>

        {/*       
        <div className='mt-4 mb-6'>
          <Pagination
            defaultCurrent={1}
            total={data.totalRows}
            showSizeChanger={false}
            onChange={handlePaging}
            pageSize={20}
          />
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default DiscoverPage
