import React from 'react'
import PROFILE from '../assets/profile (2).png'
import FACEBOOK from '../assets/facebook.png'
import TIKTOK from '../assets/tiktok.png'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'

const ProfilePage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderDark />

      <div className='flex p-20 max-h-[68vh] object-cover gap-12'>
        <div className='ml-20 -mr-14'>
          <img src={PROFILE} className='max-h-[90%]' />
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='font-bold text-3xl'>Kathryn Murphy</h1>
          </div>

          <span className='font-semibold'>
            Height: <span className='font-normal'>165 cm</span>
          </span>
          <span className='font-semibold'>
            Weight: <span className='font-normal'>60kg</span>
          </span>
          <span className='font-semibold'>
            Style: <span className='font-normal'>Casual, Young, Korean</span>
          </span>
          <div className='flex gap-4'>
            <img src={FACEBOOK} className='w-[30px]' />
            <img src={TIKTOK} className='w-[30px]' />
          </div>
          <div className='flex justify-between gap-4'>
            <button className='text-white px-4 py-2 w-fit rounded-full text-sm bg-orange my-12'>
              MY CLOSET
            </button>
            <button className='text-white px-4 py-2 w-fit rounded-full text-sm bg-orange my-12'>
              TRY MIX&MATCH
            </button>
          </div>
        </div>
      </div>

      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default ProfilePage
