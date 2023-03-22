import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/logo3.png'
import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineSetting } from 'react-icons/ai'

const HeaderDark = () => {
  return (
    <div
      id='home'
      className='flex justify-between items-center px-28 bg-black text-white'
    >
      <div className='flex items-center justify-center'>
        <img src={LOGO} alt='logo' className='w-20' />
      </div>
      <ul className='flex p-8 text-medium-blue text-lg'>
        <li className='mx-8 cursor-pointer'>
          <Link
            to='/'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-dark-blue hover:font-bold'
          >
            Home
          </Link>
        </li>
        <li className='mx-8 cursor-pointer'>
          <Link
            to='/about-us'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-dark-blue hover:font-bold'
          >
            About Us
          </Link>
        </li>
        <li className='mx-8 cursor-pointer'>
          <Link
            to='/contact'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-dark-blue hover:font-bold'
          >
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <button className='text-2xl rounded-2xl text-white hover:bg-medium-blue shadow-lg flex items-center gap-4'>
          {/* <Link to='/sign-in' className='block py-2 px-6 text-sm'>
            SIGN IN
          </Link> */}
          <BiSearch />
          <CgProfile />
          <AiOutlineSetting />
        </button>
      </div>
    </div>
  )
}

export default HeaderDark
