import React from 'react'
import HeaderDark from '../components/HeaderDark'
import OUTFIT_DETAIL from '../assets/outfitDetail.png'
import { Rate, Select } from 'antd'
import { TbBrandShopee } from 'react-icons/tb'
import { BiMessageDetail, BiEnvelope } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FiLink2 } from 'react-icons/fi'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import AxiosPut from '../config/axiosPut'
import { NotificationCustom } from '../components/Notification'

const OutfitDetailPage = () => {
  const { id } = useParams()

  const handleAddToCloset = () => {
    AxiosPut('/closets/me', {
      addedProductIds: [id]
    })
      .then(() =>
        NotificationCustom({
          type: 'success',
          message: 'Success',
          description: 'Add to closet successfully!'
        })
      )
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  return (
    <div>
      <HeaderDark />

      <div className='flex flex-col gap-4'>
        <div className='flex md:flex-row flex-col p-10 md:p-20 object-cover gap-12'>
          <img src={OUTFIT_DETAIL} className='object-contain max-h-[350px]' />
          <div className='flex flex-col justify-between md:gap-0 gap-3 items-center md:items-start'>
            <div>
              <h1 className='font-bold text-3xl'>Plain White Shirt</h1>
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <p className='max-w-[500px]'>
              A classic t-shirt never goes out of style. This is our most
              premium collection of shirt. This plain white shirt is made up of
              pure cotton and has a premium finish.
            </p>
            <Select placeholder='Select Size' className='w-[200px]'>
              <Select.Option>S</Select.Option>
              <Select.Option>M</Select.Option>
              <Select.Option>L</Select.Option>
              <Select.Option>XL</Select.Option>
              <Select.Option>XXL</Select.Option>
              <Select.Option>XXXL</Select.Option>
            </Select>
            <button
              className='text-white px-4 py-2 w-fit rounded-full text-sm bg-orange my-12'
              onClick={handleAddToCloset}
            >
              ADD TO CLOSET
            </button>
            <span className='font-semibold'>
              Category: <span className='font-normal'>Women, Polo, Casual</span>
            </span>
            <span className='font-semibold'>
              Tags: <span className='font-normal'>Modern, Design, Cotton</span>
            </span>

            <div className='flex items-center gap-2'>
              <span className='p-1 bg-gray-200 rounded-full'>
                <TbBrandShopee size={20} />
              </span>
              <span className='p-1 bg-gray-200 rounded-full'>
                <BiMessageDetail size={20} />
              </span>
              <span className='p-1 bg-gray-200 rounded-full'>
                <BsFillTelephoneFill size={20} />
              </span>
              <span className='p-1 bg-gray-200 rounded-full'>
                <FiLink2 size={20} />
              </span>
              <span className='p-1 bg-gray-200 rounded-full'>
                <BiEnvelope size={20} />
              </span>
            </div>
          </div>
        </div>

        <div className='px-10 md:px-20 mb-12'>
          <ul className='hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex  dark:text-gray-400'>
            <li className='w-fit'>
              <a
                href='#'
                className='inline-block w-fit p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none  dark:text-gray-900'
                aria-current='page'
              >
                Description
              </a>
            </li>
            <li className='w-fit'>
              <a
                href='#'
                className='inline-block w-fit p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-gray-900 '
              >
                Reviews
              </a>
            </li>
          </ul>

          <p className='p-10 leading-8 border border-gray-300 max-h-[300px] overflow-scroll'>
            A key objective is engaging digital marketing customers and allowing
            them to interact with the brand through servicing and delivery of
            digital media. Information is easy to access at a fast rate through
            the use of digital communications. Users with access to the Internet
            can use many digital mediums, such as Facebook, YouTube, Forums, and
            Email etc. Through Digital communications it creates a
            Multi-communication channel where information can be quickly
            exchanged around the world by anyone without any regard to whom they
            are.[28] Social segregation plays no part through social mediums due
            to lack of face to face communication and information being wide
            spread instead to a selective audience.{' '}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default OutfitDetailPage
