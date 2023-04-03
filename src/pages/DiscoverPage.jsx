import React from 'react'
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

const DiscoverPage = () => {
  return (
    <div>
      <HeaderDark />
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

      <div className='w-full flex flex-col items-center'>
        <div className='text-2xl mt-12 mb-6 font-medium'>
          Discover NEW TREND
        </div>
        <div className='text-base font-thin mb-12'>Recently added shirts</div>

        <div className='flex items-center justify-between w-full flex-wrap'>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/c5/8f/35/c58f3560ad12b36fff8cad9cb00f8f42.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Denim Jacket</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/22/6d/c5/226dc55dae4d80fecf8bc6d8c03a082e.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Black Polo Shirt</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/cb/ec/c6/cbecc669864071fbcbc98fdc5d34c063.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Blue Sweater</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/0a/33/94/0a3394b5909e8297b566f6ddd5f72995.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Blue Plain Shirt</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/14/e4/04/14e404dd4e3c6f41cb59063714789134.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Dark Blue Shirt</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/1b/18/13/1b1813adda398c179c950871e2c59c5a.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Outcast T Shirt</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/c5/17/07/c51707a35c92a9de0c27e7562a5e848f.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Polo Plain Shirt</span>
          </div>
        </div>

        <div className='flex flex-wrap w-full gap-5 p-16 sm:py-10 md:p-20 justify-center sm:justify-around'>
          <div className='flex gap-4 w-full sm:w-1/3 md:w-1/5'>
            <img src={SHIPPING} className='h-[30px] w-[30px] object-cover' />
            <div className='flex flex-col'>
              <span className='font-bold'>FREE SHIPPING</span>
              <span>Enjoy free shipping on all orders above $100</span>
            </div>
          </div>

          <div className='flex gap-4 w-full sm:w-1/3 md:w-1/5'>
            <img src={SUPPORT} className='h-[30px] w-[30px] object-cover' />
            <div className='flex flex-col'>
              <span className='font-bold'>SUPPORT 24/7</span>
              <span>Our support team is there to help you for queries</span>
            </div>
          </div>

          <div className='flex gap-4 w-full sm:w-1/3 md:w-1/5'>
            <img src={RETURN} className='h-[30px] w-[30px] object-cover' />
            <div className='flex flex-col'>
              <span className='font-bold'>30 DAYS RETURN</span>
              <span>Simply return it within 30 days for an exchange.</span>
            </div>
          </div>

          <div className='flex gap-4 w-full sm:w-1/3 md:w-1/5'>
            <img src={SECURE} className='h-[30px] w-[30px] object-cover' />
            <div className='flex flex-col'>
              <span className='font-bold'>100% PAYMENT SECURE</span>
              <span>Our payments are secured with 256 bit encryption</span>
            </div>
          </div>
        </div>

        <div className='flex md:flex-row flex-col gap-5 mb-12 px-6 md:px-20'>
          <div className='bg-black w-full md:w-1/2 min-h-[300px] text-white p-12 md:p-24 flex flex-col items-center gap-5'>
            <h1 className='text-2xl font-semibold'>PEACE OF MIND</h1>
            <p className='text-center'>
              A one-stop platform for all your fashion needs, hassle-free. Live
              in your own world
            </p>
            <button className='text-orange py-2 px-4  rounded-full text-xs bg-white'>
              GO NOW
            </button>
          </div>

          <div className='bg-black w-full md:w-1/2 min-h-[300px] text-white p-12 md:p-24 flex flex-col items-center gap-5'>
            <h1 className='text-2xl font-semibold'>Discover your style</h1>
            <p className='text-center'>
              Find out your style and recommended styles based on your personal
              preference
            </p>
            <button className='text-orange py-2 px-4 rounded-full text-xs bg-white'>
              GO NOW
            </button>
          </div>
        </div>

        <div className='text-2xl mt-12 mb-6 font-medium'>Most Popular</div>
        <div className='text-base font-thin mb-12'>
          Browse our most popular products
        </div>

        <div className='flex flex-wrap items-center justify-between w-full'>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/ab/0c/88/ab0c880492959104043a6397bee06338.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Hoodie</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/17/42/7d/17427d0e806593be4c3118aaeaaa427d.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Bomber</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/39/f9/2e/39f92e26015b1fed2ed31de3d40860fa.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Blazer</span>
          </div>
          <div className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4'>
            <img
              src='https://i.pinimg.com/564x/ed/5e/5a/ed5e5a84d55ff73f98e8b81c45cbdcab.jpg'
              className='object-cover h-[265px]'
            />
            <span className='font-semibold my-3'>Crop Top</span>
          </div>
        </div>
        <button className='text-white px-4 py-2  rounded-full text-base bg-orange my-12'>
          <Link to={PATH.DISCOVER}>FIND OUT MORE</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default DiscoverPage
