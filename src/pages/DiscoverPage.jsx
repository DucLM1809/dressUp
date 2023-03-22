import React from 'react'
import HeaderDark from '../components/HeaderDark'
import HERO from '../assets/hero.png'
import TREND from '../assets/trend4.png'
import SHIPPING from '../assets/shipping.png'
import Footer from '../components/Footer'

const DiscoverPage = () => {
  return (
    <div>
      <HeaderDark />

      <div className='w-full flex flex-col items-center'>
        <div className='text-2xl mt-12 mb-6 font-medium'>
          Discover NEW TREND
        </div>
        <div className='text-base font-thin mb-12'>Recently added shirts</div>

        <div className='flex items-center justify-between w-full flex-wrap'>
          <div className='flex flex-col items-center w-1/4 '>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4 '>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4 '>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4 '>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4 '>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4 '>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4 '>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4 '>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
        </div>

        <div className='flex w-full gap-5 p-20 justify-between'>
          <div className='flex gap-4 w-1/5'>
            <img src={SHIPPING} className='h-[30px] w-[30px] object-cover' />
            <div className='flex flex-col '>
              <span className='font-bold'>FREE SHIPPING</span>
              <span>Enjoy free shipping on all orders above $100</span>
            </div>
          </div>

          <div className='flex gap-4 w-1/5'>
            <img src={SHIPPING} className='h-[30px] w-[30px] object-cover' />
            <div className='flex flex-col '>
              <span className='font-bold'>FREE SHIPPING</span>
              <span>Enjoy free shipping on all orders above $100</span>
            </div>
          </div>

          <div className='flex gap-4 w-1/5'>
            <img src={SHIPPING} className='h-[30px] w-[30px] object-cover' />
            <div className='flex flex-col '>
              <span className='font-bold'>FREE SHIPPING</span>
              <span>Enjoy free shipping on all orders above $100</span>
            </div>
          </div>

          <div className='flex gap-4 w-1/5'>
            <img src={SHIPPING} className='h-[30px] w-[30px] object-cover' />
            <div className='flex flex-col '>
              <span className='font-bold'>FREE SHIPPING</span>
              <span>Enjoy free shipping on all orders above $100</span>
            </div>
          </div>
        </div>

        <div className='flex gap-5 mb-12 px-20'>
          <div className='bg-black w-1/2 min-h-[300px] text-white p-24 flex flex-col items-center gap-5'>
            <h1 className='text-2xl font-semibold'>PEACE OF MIND</h1>
            <p className='text-center'>
              A one-stop platform for all your fashion needs, hassle-free. Live
              in your own world
            </p>
            <button className='text-orange py-2 px-4  rounded-full text-xs bg-white'>
              GO NOW
            </button>
          </div>

          <div className='bg-black w-1/2 min-h-[300px] text-white p-24 flex flex-col items-center gap-5'>
            <h1 className='text-2xl font-semibold'>PEACE OF MIND</h1>
            <p className='text-center'>
              A one-stop platform for all your fashion needs, hassle-free. Live
              in your own world
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

        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col items-center w-1/4'>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4'>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4'>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
          <div className='flex flex-col items-center w-1/4'>
            <img src={TREND} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>Plain White Shirt</span>
          </div>
        </div>
        <button className='text-white px-4 py-2  rounded-full text-base bg-orange my-12'>
          FIND OUT MORE
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default DiscoverPage
