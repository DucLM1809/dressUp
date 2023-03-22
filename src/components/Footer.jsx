import React from 'react'
import { Link } from 'react-router-dom'
import LOGO2 from '../assets/logo2.png'
import FACEBOOK from '../assets/facebook.png'
import TIKTOK from '../assets/tiktok.png'
import SHOPEE from '../assets/shoppee.png'
import PHONE from '../assets/telephone.png'
import EMAIL from '../assets/email.png'
import WEB from '../assets/web.png'
import { PATH } from '../constants/common'

const Footer = () => {
  return (
    <div className='bg-[#F7931E] flex justify-around px-8 py-10'>
      <div className='flex flex-col items-center justify-center -mt-5'>
        <Link to={PATH.HOME}>
          <img src={LOGO2} alt='Logo' className='w-[100px]' />
        </Link>
        <div className='flex gap-3 mt-1'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={FACEBOOK}
              alt='Facebook'
              className='w-[30px] object-cover'
            />
          </a>
          <a
            href='https://www.tiktok.com/'
            target='_blank'
            rel='noopener noreferrer'
            class='ml-2'
          >
            <img src={TIKTOK} alt='TikTok' className='w-[32px] object-cover' />
          </a>
          <a
            href='https://shopee.vn/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={SHOPEE} alt='Shopee' className='w-[50px] object-cover' />
          </a>
        </div>
      </div>

      <div className='flex flex-col items-start justify-between p-4'>
        <div className='flex items-center mb-4'>
          <img src={PHONE} alt='Phone' className='w-[25px] h-[25px] mr-4' />
          <span>(+84) 345 678 910</span>
        </div>
        <div className='flex items-center mb-4'>
          <img src={EMAIL} alt='Email' className='w-[25px] h-[25px] mr-4' />
          <span>support@dressup.com</span>
        </div>
        <div className='flex items-center'>
          <img src={WEB} alt='Web' className='w-[25px] h-[25px] mr-4' />
          <span>TP. Ho Chi Minh - Viet Nam</span>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center text-white'>
        <span className='text-md opacity-50'>
          © 2023 DressUp. All Rights Reserved
        </span>
        <div className='mt-2 flex items-center justify-center'>
          <a
            href='#'
            className='opacity-50 hover:opacity-100 transition-opacity mr-4'
          >
            Terms & Conditions
          </a>
          <span className='opacity-50'>|</span>
          <a
            href='#'
            className='opacity-50 hover:opacity-100 transition-opacity ml-4'
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
