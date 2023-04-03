import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import COVER_IMAGE from '../assets/background.jpg'
import { NotificationCustom } from '../components/Notification'
import AxiosPost from '../config/axiosPost'
import { PATH } from '../constants/common'

const ForgetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const onSubmit = (values) => {
    AxiosPost('auth/users/forgot-password', values).then((res) =>
      NotificationCustom({
        type: 'info',
        message: 'Info',
        description: res?.data?.detail
      })
    )
  }

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full md:flex flex-col hidden'>
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

      <div className='w-full md:w-1/2 h-full bg-background flex flex-col p-20 justify-between items-center'>
        <h1 className='w-full max-w-[500px] mx-auto text-lg md:text-xl text-black font-semibold'>
          DressUp
        </h1>

        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-10'>
            <h3 className='text-2xl md:text-3xl font-semibold mb-2'>
              Forget Password
            </h3>
            <p className='text-sm md:text-base mb-2'>
              Forget your password? Please enter your email.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full flex flex-col'>
              <input
                className='w-full text-black py-2 pl-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                type='email'
                placeholder='Email'
                name='email'
                {...register('email', {
                  required: 'You must specify an email.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email format.'
                  }
                })}
              />
              {errors?.email && (
                <p className='p-1 text-[13px] font-normal text-red-500 '>
                  {errors?.email?.message}
                </p>
              )}
            </div>

            <div className='w-full flex flex-col my-4'>
              <button
                type='submit'
                className='w-full my-2 font-semibold text-white bg-black rounded-md py-2 md:p-4 text-center flex items-center justify-center cursor-pointer'
              >
                Confirm
              </button>
            </div>
          </form>
        </div>

        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-black'>
            <span className='font-semibold underline underline-offset-2 cursor-pointer'>
              <Link to={PATH.LOGIN}>Back to login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgetPasswordPage
