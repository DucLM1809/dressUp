import React from 'react'
import HeaderDark from '../components/HeaderDark'
import BG_ABOUT from '../assets/bgAbout.jpg'
import FOUNDER1 from '../assets/founder1.png'
import FOUNDER2 from '../assets/founder2.png'
import FOUNDER3 from '../assets/founder3.png'
import AnNinhAvatar from '../assets/an-ninh-avatar.jpg'
import QUOTE from '../assets/quote.png'
import Footer from '../components/Footer'

const AboutUsPage = () => {
  return (
    <div className='w-full'>
      <HeaderDark />
      <div className='w-full m-auto text-white relative'>
        <img src={BG_ABOUT} className='w-full h-[300px] object-cover' />
      </div>

      <div className='w-full flex flex-col items-center mt-10'>
        <h1 className='text-4xl mb-12'>Nice to meet you!</h1>

        <div className='flex flex-wrap items-center justify-between w-full mb-4'>
          <div className='flex flex-col items-center justify-start w-full'>
            <img src={FOUNDER3} className='object-cover h-[350px] rounded' />
            <span className='font-semibold text-xl my-3 '>
              Nguyễn Xuân Duy - CEO
            </span>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-between w-full mt-6 mb-12'>
          <div className='flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/5'>
            <img
              src={AnNinhAvatar}
              className='object-cover h-[250px] rounded'
            />
            <span className='font-semibold my-3'>
              Vũ An Ninh - Sales & Marketing
            </span>
          </div>
          <div className='flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/5'>
            <img src={FOUNDER3} className='object-cover h-[250px] rounded' />
            <span className='font-semibold my-3'>
              Phan Anh Thư - Communications
            </span>
          </div>
          <div className='flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/5'>
            <img src={FOUNDER1} className='object-cover h-[250px] rounded' />
            <span className='font-semibold my-3 '>
              Trần Thanh Quang - Product
            </span>
          </div>
          <div className='flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/5'>
            <img src={FOUNDER2} className='object-cover h-[250px] rounded' />
            <span className='font-semibold my-3'>Lê Minh Đức - Product</span>
          </div>
          <div className='flex flex-col items-center justify-start w-full sm:w-1/2 md:w-1/5'>
            <img src={FOUNDER3} className='object-cover h-[250px] rounded' />
            <span className='font-semibold my-3'>
              Thân Trọng Đạt - Design & Product
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-16 w-2/3 h-full mb-12'>
          <div className='flex  md:flex-row flex-col gap-12 items-center'>
            <img src={FOUNDER1} className='w-[150px] rounded-full' />
            <div className='h-full'>
              <img src={QUOTE} className='h-[50px] w-[50px]' />
              <p>
                I have always had problems with my fashion. Choosing clothes
                once was my nightmare, but not anymore. With DressUp, I desire
                to let people know: choosing your own styles lets you UPgrade
                yourself. So, DressUp!
              </p>
              <span className='font-bold'>Duy Nguyễn</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutUsPage
