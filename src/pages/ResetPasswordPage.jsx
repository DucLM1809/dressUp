import { Link } from 'react-router-dom'
import COVER_IMAGE from '../assets/background.jpg'
import { PATH } from '../constants/common'

const ResetPasswordPage = () => {
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
            <h3 className='text-3xl font-semibold mb-2'>Reset Password</h3>
            <p className='text-base mb-2'>
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className='w-full flex flex-col'>
            <input
              className='w-full text-black py-2 pl-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              type='password'
              placeholder='New Password'
            />

            <input
              className='w-full text-black py-2 pl-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              type='password'
              placeholder='Confirm Password'
            />
          </div>

          <div className='w-full flex flex-col my-4'>
            <button className='w-full my-2 font-semibold text-white bg-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
              Reset
            </button>
          </div>
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

export default ResetPasswordPage
