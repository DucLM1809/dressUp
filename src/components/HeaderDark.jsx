import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LOGO from '../assets/Logo.png'
import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineSetting } from 'react-icons/ai'
import AxiosDelete from '../config/axiosDelete'
import { LOCAL_STORAGE_ITEMS, PATH } from '../constants/common'
import { NotificationCustom } from './Notification'
import BACK_BUTTON from '../assets/arrow-left-circle.png'
import USER_HEADER from '../assets/user-1.png'
import CART from '../assets/cart.png'
import MENU from '../assets/menu.png'
import { useAuth } from '../hooks/useAuth'

const HeaderDark = () => {
  const [hidden, setHidden] = useState(true)
  const navigate = useNavigate()
  const auth = useAuth()

  const handleLogout = () => {
    AxiosDelete('auth/users/tokens')
      .then(() => localStorage.removeItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN))
      .then(() => {
        NotificationCustom({
          type: 'success',
          message: 'Success',
          description: 'Logout Successfully!',
        })
        navigate(PATH.LOGIN)
      })
      .catch((err) => {
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail,
        })
      })
  }
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      id='home'
      className='w-full flex flex-col lg:flex-row flex-wrap items-center justify-between px-2 lg:px-10 bg-[#FFF1E4] text-white sticky top-0 z-10'
    >
      <div className='flex items-center pt-2 lg:pt-0'>
        <div
          className='mr-2 lg:mr-4 cursor-pointer'
          onClick={() => navigate(-1)}
        >
          <img
            src={BACK_BUTTON}
            alt='back-button'
            className='w-[20px] lg:w-[26px]'
          />
        </div>
        <Link to={PATH.HOME} className='mb-2'>
          <img src={LOGO} alt='logo' className='w-36 lg:w-56' />
        </Link>
      </div>
      <ul className='flex p-1 lg:p-6 text-[#6F6F6F] text-[13.5px] lg:text-[20px] font-medium'>
        <li className='mx-2 lg:mx-10 cursor-pointer'>
          <Link
            to={PATH.HOME}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-orange transition duration-500 ease-in-out'
          >
            HOME
          </Link>
        </li>

        <li className='mx-2 lg:mx-10 cursor-pointer'>
          <Link
            to={PATH.ABOUT_US}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-orange transition duration-500 ease-in-out'
          >
            ABOUT US
          </Link>
        </li>

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
            DISCOVER
          </Link>
        </li>

        <li className='mx-2 lg:mx-10 cursor-pointer'>
          <Link
            to={PATH.CONTACT}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-orange transition duration-500 ease-in-out'
          >
            CONTACT
          </Link>
        </li>
      </ul>
      {!auth ? (
        <Link
          to={PATH.LOGIN}
          className='text-gray-500 text-[18px] lg:text-[20px] mx-2'
        >
          Log In
        </Link>
      ) : (
        <div className='flex items-center'>
          <div
            className='mx-3 cursor-pointer'
            onClick={() => navigate(PATH.PROFILE)}
          >
            <img src={USER_HEADER} alt='user-header' />
          </div>
          <div
            className='mx-2 mb-4 cursor-pointer'
            onClick={() => navigate(PATH.MY_CLOSET)}
          >
            <img src={CART} alt='cart' />
          </div>

          <div className='mx-2 mt-1'>
            <div onClick={toggleDropdown} className='cursor-pointer'>
              <img src={MENU} alt='menu' aria-hidden='true' />
            </div>
            {isOpen && (
              <div className='absolute z-10 mt-2 right-0 mr-10 rounded-md shadow-lg'>
                <div className='py-1 bg-white rounded-md shadow-xs'>
                  <Link
                    to={PATH.MY_CLOSET}
                    className='block px-4 pr-20 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  >
                    My Closet
                  </Link>
                  <Link
                    to='#'
                    className='block px-4 pr-20 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  >
                    Mix&Match
                  </Link>
                  <Link
                    onClick={handleLogout}
                    className='block px-4 pr-20 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  >
                    Log Out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderDark
