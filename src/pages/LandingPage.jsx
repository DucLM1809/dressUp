import React from 'react'
import Header from '../components/Header'
import HERO from '../assets/hero.png'
import HERO2 from '../assets/hero2.png'
import BRAND from '../assets/brand.png'
import Thumbnail from '../components/Thumbnail'
import TREND2 from '../assets/trend2.jpg'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <img src={HERO} className='w-2/5 m-auto object-cover' />

      <div className='bg-[#F6E7CB] w-full flex flex-col items-center'>
        <div className='text-2xl my-12 font-medium'>TRENDS</div>
        <div className='flex items-center justify-center'>
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>

      <div className='w-full flex flex-col items-center'>
        <div className='text-2xl my-12 font-medium'>RECOMMENDED BRANDS</div>
        <div className='flex flex-wrap'>
          <img src={BRAND} className='w-1/4' />
          <img src={BRAND} className='w-1/4' />
          <img src={BRAND} className='w-1/4' />
          <img src={BRAND} className='w-1/4' />
          <img src={BRAND} className='w-1/4' />
          <img src={BRAND} className='w-1/4' />
          <img src={BRAND} className='w-1/4' />
          <img src={BRAND} className='w-1/4' />
        </div>
      </div>

      <div className='w-full flex flex-col items-center'>
        <img src={HERO2} className='w-2/5 m-auto' />
      </div>

      <div className='mt-4 w-full flex items-center p-10'>
        <div>
          <img src={TREND2} className='w-1/2' />
        </div>
        <div className='flex flex-col h-full'>
          <div className='text-2xl font-medium'>Vera Wang</div>
          <div className='flex gap-10 my-2'>
            <span>New</span>
            <span>All</span>
            <span>Top</span>
            <span>Bottom</span>
          </div>
          <div className='flex'>
            <div className='flex flex-col'>
              <img src={TREND2} className='w-1/2' />
              <span className='font-bold text-sm text-center w-1/2'>
                LOOK 1
              </span>
            </div>
            <div className='flex flex-col'>
              <img src={TREND2} className='w-1/2' />
              <span className='font-bold text-sm text-center w-1/2'>
                LOOK 2
              </span>
            </div>
          </div>

          <span className='mt-4 underline underline-offset-2 decoration-gray-400 '>
            See More
          </span>
        </div>
      </div>

      <div className='bg-[#FDEDED] w-full flex flex-col items-center'>
        <div className='text-2xl my-12 font-medium'>KNOWLEDGES</div>
        <div className='flex items-center justify-center'>
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>

      <div className='mt-4 w-full flex items-center p-10'>
        <div className='flex flex-col items-center'>
          <Thumbnail />
          <Thumbnail />
        </div>
        <Thumbnail />
        <div className='flex flex-col items-center'>
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage
