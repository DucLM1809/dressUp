import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LOGO from '../assets/logo3.png'
import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineSetting } from 'react-icons/ai'
import AxiosDelete from '../config/axiosDelete'
import { LOCAL_STORAGE_ITEMS, PATH } from '../constants/common'
import { NotificationCustom } from './Notification'

const HeaderDark = () => {
  const [hidden, setHidden] = useState(true)
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

  return (
    <div
      id='home'
      className='w-full flex flex-wrap items-center justify-between p-4 bg-black text-white'
    >
      <Link to={PATH.HOME} className='flex items-center justify-center'>
        <img src={LOGO} alt='logo' className='w-36' />
      </Link>
      <ul className='hidden md:flex p-8 text-medium-blue text-lg'>
        <li className='mx-8 cursor-pointer'>
          <Link
            to={PATH.HOME}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-orange transition duration-500 ease-in-out'
          >
            Home
          </Link>
        </li>
        <li className='mx-8 cursor-pointer'>
          <Link
            to={PATH.ABOUT_US}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-orange transition duration-500 ease-in-out'
          >
            About Us
          </Link>
        </li>
        <li className='mx-8 cursor-pointer'>
          <Link
            to={PATH.CONTACT}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-orange transition duration-500 ease-in-out'
          >
            Contact
          </Link>
        </li>
        <li className='mx-8 cursor-pointer'>
          <Link
            to={PATH.DISCOVER}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-orange transition duration-500 ease-in-out'
          >
            Discover
          </Link>
        </li>
      </ul>
      <div className='relative'>
        <button className='text-2xl rounded-2xl text-white hover:bg-medium-blue shadow-lg flex items-center gap-4'>
          {/* <Link to='/sign-in' className='block py-2 px-6 text-sm'>
            SIGN IN
          </Link> */}
          <BiSearch />
          <CgProfile onClick={() => navigate(PATH.PROFILE)} />
          <AiOutlineSetting onClick={() => setHidden(!hidden)} />
        </button>
        <div
          id='dropdown'
          className={`z-10 ${
            hidden ? 'hidden' : ''
          } bg-[#141414] divide-y divide-gray-100 rounded-lg shadow shadow-gray-800 w-44 absolute top-10 right-0`}
        >
          <ul
            className='py-2 text-sm text-white'
            aria-labelledby='dropdownButton'
          >
            <li
              className='block px-4 py-2 hover:bg-gray-700 cursor-pointer'
              onClick={handleLogout}
            >
              Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderDark
