import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-orange'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='flex flex-col items-center justify-center -mt-5 py-3 lg:py-0'>
            {/* <Link to={PATH.HOME} className='mb-2'>
              <img src={LOGO2} alt='Logo' className='w-[120px]' />
            </Link> */}
          </div>
        </div>

        <hr className='my-6 sm:mx-auto lg:my-8' />

        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-gray-600 sm:text-center dark:text-gray-400'>
            © 2023.
          </span>
          <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-gray-600'>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
