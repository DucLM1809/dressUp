import React, { useEffect, useState } from 'react'
import HeaderDark from '../components/HeaderDark'
import HERO from '../assets/hero.png'
import TREND from '../assets/trend4.png'
import SHIPPING from '../assets/shipping.png'
import SUPPORT from '../assets/support.png'
import RETURN from '../assets/return.png'
import SECURE from '../assets/secure.png'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '../constants/common'
import AxiosGet from '../config/axiosGet'
import axios from 'axios'
import Product from '../components/Product'
import Banner from '../components/Banner'
import CardStack from '../components/CardStack'
import styles from '../components/styles.module.css'

const HomePage = () => {
  const navigate = useNavigate()
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

      <Banner />

      <div className='w-full flex flex-col items-center gap-4'>
        <div className='text-2xl mt-10  font-medium bg-black w-80 text-white py-2 text-center'>
          Discover NEW TREND
        </div>
        <span className='w-20 h-[3px] bg-black'></span>
        <div className='text-base font-light mb-12'>Recently added shirts</div>

        <div className='max-w-screen-xl mx-auto py-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
          {data.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>

        {/* <div className='flex flex-wrap w-full gap-5 p-16 sm:py-10 md:p-20 justify-center sm:justify-around'>
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
        </div> */}

        <div className={styles.container}>
          <CardStack />
        </div>

        <div className='flex md:flex-row flex-col gap-5 mb-12 px-6 md:px-20'>
          <div className='bg-advertise1 bg-no-repeat bg-cover bg-center w-full md:w-1/2 min-h-[300px] text-white p-12 md:p-24 flex flex-col items-center gap-5'>
            <h1 className='text-2xl font-semibold'>PEACE OF MIND</h1>
            <p className='text-center'>
              A one-stop platform for all your fashion needs, hassle-free. Live
              in your own world
            </p>
            <button className='text-orange py-2 px-4  rounded-full text-xs bg-white'>
              GO NOW
            </button>
          </div>

          <div
            className={`bg-advertise2 bg-no-repeat bg-cover bg-center w-full md:w-1/2 min-h-[300px] text-white p-12 md:p-24 flex flex-col items-center gap-5`}
          >
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

        <div className='text-2xl font-medium bg-black w-80 text-white py-2 text-center'>
          Most Popular
        </div>
        <span className='w-20 h-[3px] bg-black'></span>
        <div className='text-base font-light mb-12'>
          Browse our most popular products
        </div>

        <div className='max-w-screen-xl mx-auto py-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
          {data.splice(0, 4).map((item) => (
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

export default HomePage
