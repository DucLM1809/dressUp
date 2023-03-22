import React from 'react'
import { Link } from 'react-router-dom'
import COVER_IMAGE from '../assets/background.jpg'
import GOOGLE_ICON from '../assets/google.svg'
import { PATH } from '../constants/common'

const LoginPage = () => {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'>
            Turn Your Ideas into reality
          </h1>
          <p className='text-xl text-white font-normal'>
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img src={COVER_IMAGE} className='w-full h-full object-cover' />
      </div>

      <div className='w-1/2 h-full bg-background flex flex-col p-20 justify-between items-center'>
        <h1 className='w-full max-w-[500px] mx-auto text-xl text-black font-semibold'>
          Interactive Brand
        </h1>

        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-10'>
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-base mb-2'>
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className='w-full flex flex-col'>
            <input
              className='w-full text-black py-2 pl-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              type='email'
              placeholder='Email'
            />

            <input
              className='w-full text-black py-2 pl-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              type='password'
              placeholder='Password'
            />
          </div>

          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex'>
              <input type='checkbox' className='w-4 h-4 mr-2' />
              <p className='text-sm'>Remember Me</p>
            </div>

            <p className='text-sm font-medium cursor-pointer whitespace-nowrap underline underline-offset-2'>
              <Link to={PATH.FORGET_PASSWORD}>Forgot Password?</Link>
            </p>
          </div>

          <div className='w-full flex flex-col my-4'>
            <button className='w-full my-2 font-semibold text-white bg-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
              Log in
            </button>

            <div className='w-full flex items-center justify-center relative py-2'>
              <div className='w-full h-[1px] bg-black/40'></div>
              <p className='absolute text-lg text-black/80 bg-background my-2'>
                {' '}
                or{' '}
              </p>
            </div>

            <div className='w-full my-2 font-semibold text-black bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
              <img src={GOOGLE_ICON} className='h-6 mr-2' />
              Sign In With Google
            </div>
          </div>
        </div>

        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-black'>
            Don't have a account?{' '}
            <span className='font-semibold underline underline-offset-2 cursor-pointer'>
              <Link to={PATH.SIGNUP}>Sign up for free</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
