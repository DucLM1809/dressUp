import React from 'react'
import LOGO2 from '../assets/logo2.png'
import FACEBOOK from '../assets/facebook.png'
import TIKTOK from '../assets/tiktok.png'
import SHOPEE from '../assets/shoppee.png'
import PHONE from '../assets/telephone.png'
import EMAIL from '../assets/email.png'
import WEB from '../assets/web.png'

const Footer = () => {
  return (
    <div className='bg-[#F7931E] flex justify-around p-8'>
      <div>
        <img src={LOGO2} className='w-[100px]' />
        <div className='flex gap-3'>
          <img src={FACEBOOK} className='w-[25px] object-cover' />
          <img src={TIKTOK} className='w-[25px] object-cover' />
          <img src={SHOPEE} className='w-[25px] object-cover' />
        </div>
      </div>

      <div className='flex flex-col items-start justify-between p-4'>
        <div className='flex'>
          <img src={PHONE} className='w-[25px] h-[25px] mr-4' />
          <span>(+84)345678910</span>
        </div>
        <div className='flex'>
          <img src={EMAIL} className='w-[25px] h-[25px] mr-4' />
          <span>baconma@gmail.com</span>
        </div>
        <div className='flex'>
          <img src={WEB} className='w-[25px] h-[25px] mr-4' />
          <span>TP. Ho Chi Minh - Viet Nam</span>
        </div>
      </div>

      <div>Copyright 2021 | Terms & Conditions | dressup.com.vn</div>
    </div>
  )
}

export default Footer
