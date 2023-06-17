import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AxiosDelete from '../config/axiosDelete'
import { LOCAL_STORAGE_ITEMS, PATH } from '../constants/common'
import { NotificationCustom } from './Notification'
import { Button } from 'antd'

const HeaderDark = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    AxiosDelete('auth/users/tokens')
      .then(() => localStorage.removeItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN))
      .then(() => {
        NotificationCustom({
          type: 'success',
          message: 'Success',
          description: 'Logout Successfully!'
        })
        navigate(PATH.LOGIN)
      })
      .catch((err) => {
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      })
  }
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      id='home'
      className='w-full flex flex-col lg:flex-row flex-wrap items-center justify-between px-2 lg:px-10 bg-gradient-to-b from-[#FFF1E4] to-[#fff] text-white sticky top-0 z-10 shadow-md'
    >
      <div className='flex items-center pt-2 lg:pt-0'>
        {/* <div
          className='mr-2 lg:mr-4 cursor-pointer'
          onClick={() => navigate(-1)}
        >
          <img
            src={BACK_BUTTON}
            alt='back-button'
            className='w-[20px] lg:w-[26px]'
          />
        </div> */}
        <Link to={PATH.HOME} className='mb-2'>
          {/* <img src={LOGO} alt='logo' className='w-32 lg:w-36' /> */}
        </Link>
      </div>
      <ul className='flex p-1 lg:p-6 text-[#6F6F6F] text-[13.5px] lg:text-[16px] font-medium'>
        <li className='mx-2 lg:mx-10 cursor-pointer'>
          <Link
            to={PATH.DISCOVER}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-orange transition duration-500 ease-in-out'
          >
            PRODUCT
          </Link>
        </li>
        {localStorage.getItem('role') === 'ADMIN' && (
          <li className='mx-2 lg:mx-10 cursor-pointer'>
            <Link
              to={PATH.PRODUCT}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              activeClass='active'
              className='hover:text-orange transition duration-500 ease-in-out'
            >
              MANAGEMENT
            </Link>
          </li>
        )}
      </ul>

      <Button
        onClick={() => {
          localStorage.removeItem('accessToken')
          navigate(PATH.LOGIN)
        }}
      >
        Logout
      </Button>
    </div>
  )
}

export default HeaderDark
