import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/logo1.svg'
import { PATH } from '../constants/common'

const Header = () => {
  return (
    <div id='home' className='flex justify-between items-center mx-28'>
      <div className='flex items-center justify-center'>
        <img src={LOGO} alt='logo' className='w-20' />
      </div>
      <ul className='flex p-8 text-medium-blue text-lg'>
        <li className='mx-8 cursor-pointer'>
          <Link
            to='home'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-dark-blue hover:font-bold'
          >
            Shopping
          </Link>
        </li>
        <li className='mx-8 cursor-pointer'>
          <Link
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            className='hover:text-dark-blue hover:font-bold'
          >
            Style
          </Link>
        </li>
        <li className='mx-8 cursor-pointer'>
          <Link
            to='services'
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
            to='destinations'
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
        <button className='bg-orange rounded-2xl text-white hover:bg-medium-blue shadow-lg'>
          <Link to={PATH.LOGIN} className='block py-2 px-6 text-sm'>
            SIGN IN
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Header
