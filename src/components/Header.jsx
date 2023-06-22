import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/Logo.png'
import { PATH } from '../constants/common'

const Header = () => {
  return (
    <div
      id='home'
      className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative'
    >
      <Link to='#' className='mb-2'>
        <img src={LOGO} alt='logo' className='w-32 lg:w-36' />
      </Link>

      <div className='flex items-end gap-4'>
        <Link to={PATH.BLOG} className='block text-xs md:text-sm'>
          <button className='border px-4 py-1.5 rounded-md bg-orange font-semibold text-white hover:bg-transparent hover:text-orange hover:border-orange duration-200'>
            BLOG
          </button>
        </Link>
        <Link to={PATH.LOGIN} className='block text-xs md:text-sm'>
          <button className='border px-4 py-1.5 rounded-md border-orange font-semibold text-orange hover:bg-orange hover:text-white duration-200'>
            SIGN IN
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
