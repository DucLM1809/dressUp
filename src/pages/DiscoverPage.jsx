import React, { useEffect, useState } from 'react'
import HeaderDark from '../components/HeaderDark'
import TREND from '../assets/trend4.png'
import SHIPPING from '../assets/shipping.png'
import SUPPORT from '../assets/support.png'
import RETURN from '../assets/return.png'
import SECURE from '../assets/secure.png'
import Footer from '../components/Footer'
import { Form, Input, Select } from 'antd'
import { Link } from 'react-router-dom'
import { PATH } from '../constants/common'
import axios from 'axios'
import Product from '../components/Product'

const DiscoverPage = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await axios.get(
      'https://fakestoreapiserver.reactbd.com/products'
    )
    if (res) {
      setData(res.data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-full'>
      <HeaderDark />
      <div className='mb-10'>
        <Form layout='horizontal' className='mt-8'>
          <div className='flex flex-wrap justify-between gap-4 px-10 md:px-24'>
            <Form.Item
              label='Sort'
              name='sort'
              className=' min-w-[200px] font-semibold'
            >
              <Select placeholder='Recommended' className='w-[200px]'>
                <Select.Option>Recommended</Select.Option>
                <Select.Option>What's new</Select.Option>
                <Select.Option>Price high to low</Select.Option>
                <Select.Option>Price low to high</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label='Category'
              name='category'
              className=' min-w-[200px] font-semibold'
            >
              <Select placeholder='Tops' className='w-[200px]'>
                <Select.Option>Tops</Select.Option>
                <Select.Option>Footware</Select.Option>
                <Select.Option>Jeans & Trousers</Select.Option>
                <Select.Option>Shorts</Select.Option>
                <Select.Option>Dresses</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label='Style'
              name='style'
              className=' min-w-[200px] font-semibold'
            >
              <Select placeholder='Baseball' className='w-[200px]'>
                <Select.Option>Baseball</Select.Option>
                <Select.Option>Bodycon</Select.Option>
                <Select.Option>Bomber Jacket</Select.Option>
                <Select.Option>Crop</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label='Size'
              name='size'
              className=' min-w-[200px] font-semibold'
            >
              <Select placeholder='Select Size' className='w-[200px]'>
                <Select.Option>S</Select.Option>
                <Select.Option>M</Select.Option>
                <Select.Option>L</Select.Option>
                <Select.Option>XL</Select.Option>
                <Select.Option>XXL</Select.Option>
                <Select.Option>XXXL</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label='Discount'
              name='discount'
              className=' min-w-[200px] font-semibold'
            >
              <Select placeholder='Up to 20%' className='w-[200px]'>
                <Select.Option>Up to 20%</Select.Option>
                <Select.Option>20% - 30%</Select.Option>
                <Select.Option>30% - 40%</Select.Option>
                <Select.Option>40% - 50%</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label='Price'
              name='price'
              className=' min-w-[200px] font-semibold'
            >
              <Input placeholder='Price' />
            </Form.Item>
          </div>
        </Form>
      </div>

      <div className='w-full flex flex-col items-center gap-4'>
        <div className='text-2xl  font-medium bg-black w-80 text-white py-2 text-center'>
          Discover NEW TREND
        </div>
        <span className='w-20 h-[3px] bg-black'></span>
        <div className='text-base font-light mb-12'>Recently added shirts</div>

        <div className='max-w-screen-xl mx-auto py-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
          {data.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>

        <button className='text-white px-4 py-2 text-base bg-orange my-12'>
          <Link to={PATH.DISCOVER}>FIND OUT MORE</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default DiscoverPage
