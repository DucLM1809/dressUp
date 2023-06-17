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

          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Company Info
              </h2>
              <ul className='text-gray-600'>
                <li className='mb-3'>
                  <Link className='hover:underline'>About Us</Link>
                </li>
                <li className='mb-3'>
                  <Link className='hover:underline'>Latest Posts</Link>
                </li>
                <li className='mb-3'>
                  <Link className='hover:underline'>Contact Us</Link>
                </li>
                <li>
                  <Link className='hover:underline'>Shop</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                My Closet
              </h2>
              <ul className='text-gray-600'>
                <li className='mb-3'>
                  <Link className='hover:underline '>Profile</Link>
                </li>
                <li className='mb-3'>
                  <Link className='hover:underline '>My Closet</Link>
                </li>
                <li className='mb-3'>
                  <Link className='hover:underline '>Outfit Builder</Link>
                </li>
                <li className='mb-3'>
                  <Link className='hover:underline '>Catalog</Link>
                </li>
                <li>
                  <Link className='hover:underline'>Blog</Link>
                </li>
              </ul>
            </div>
            <div className='w-[300px] md:w-auto'>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                GET IN THE KNOW
              </h2>
              <div className='relative'>
                <input
                  type='search'
                  className='w-full p-3 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50'
                  placeholder='Enter Email'
                  required
                />
                <button className='text-white absolute right-2 bottom-2 bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-[12px] px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className='my-6 sm:mx-auto lg:my-8' />

        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-gray-600 sm:text-center dark:text-gray-400'>
            © 2023. DressUp Co. Ltd.
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
