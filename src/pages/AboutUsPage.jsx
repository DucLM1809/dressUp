import React from 'react'
import HeaderDark from '../components/HeaderDark'
import BG_ABOUT from '../assets/bgAbout.jpg'
import PEOPLE1 from '../assets/people1.png'
import FOUNDER from '../assets/founder1.png'
import TESTIMONIALS from '../assets/testimonials1.png'
import QUOTE from '../assets/quote.png'
import Footer from '../components/Footer'

const AboutUsPage = () => {
  return (
    <div>
      <HeaderDark />
      <div className='w-full m-auto text-white relative'>
        <img src={BG_ABOUT} className='w-full h-[300px] object-cover' />
        <span className='absolute top-1/2 -translate-y-1/2 left-24 text-2xl font-bold'>
          ABOUT DRESSUP
        </span>
      </div>

      <div className='w-full flex flex-col items-center'>
        <div className='p-20 flex w-full justify-around'>
          <div className='relative'>
            <img src={PEOPLE1} className='w-[400px] h-[400px] object-cover' />
            <button className='text-white px-8 py-2 rounded-full text-base bg-orange my-12 absolute bottom-0 left-1/2 -translate-x-1/2'>
              SAVE
            </button>
          </div>
          <div className='relative'>
            <img src={PEOPLE1} className='w-[400px] h-[400px] object-cover' />
            <button className='text-white px-8 py-2 rounded-full text-base bg-orange my-12 absolute bottom-0 left-1/2 -translate-x-1/2'>
              SAVE
            </button>
          </div>
        </div>

        <div className='text-2xl mb-12 font-medium'>The Founders</div>

        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col items-center justify-start w-1/4'>
            <img src={FOUNDER} className='object-cover h-[265px]' />
            <span className='font-semibold my-3 '>HM Jawad</span>
          </div>
          <div className='flex flex-col items-center justify-start w-1/4'>
            <img src={FOUNDER} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>HM Jawad</span>
          </div>
          <div className='flex flex-col items-center justify-start w-1/4'>
            <img src={FOUNDER} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>HM Jawad</span>
          </div>
          <div className='flex flex-col items-center justify-start w-1/4'>
            <img src={FOUNDER} className='object-cover h-[265px]' />
            <span className='font-semibold my-3'>HM Jawad</span>
          </div>
        </div>

        <div className='text-2xl my-12 font-medium'>The Founders</div>
        <div className='flex flex-col gap-16 w-2/3 h-full mb-12'>
          <div className='flex gap-12 items-center'>
            <img src={TESTIMONIALS} className='w-[150px]' />
            <div className='h-full'>
              <img src={QUOTE} className='h-[50px] w-[50px]' />
              <p>
                Once we ordered some accessories items and we got the products
                delivered in our doorstep, the customer support was super
                helpful and they answered all my queries.
              </p>
              <span className='font-bold'>Stacy</span>
            </div>
          </div>
          <div className='flex gap-12 items-center'>
            <img src={TESTIMONIALS} className='w-[150px]' />
            <div>
              <img src={QUOTE} className='h-[50px] w-[50px]' />
              <p>
                Once we ordered some accessories items and we got the products
                delivered in our doorstep, the customer support was super
                helpful and they answered all my queries.
              </p>
              <span className='font-bold'>Stacy</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutUsPage
