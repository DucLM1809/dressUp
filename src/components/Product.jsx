import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../constants/common'
import AxiosPost from '../config/axiosPost'
import { NotificationCustom } from './Notification'
import shirtIcon from '../assets/stylish-tshirt.png'

const Product = ({ product, handleClick }) => {
  const navigate = useNavigate()

  const handleBuyProduct = (productId) => {
    AxiosPost('Customer/buy-product', {
      productId
    })
      .then(() => {
        NotificationCustom({
          type: 'success',
          message: 'Success',
          description: 'Buy successfully!'
        })
      })
      .catch((err) =>
        NotificationCustom({
          type: 'error',
          message: 'Error',
          description: err?.response?.data?.detail
        })
      )
  }

  return (
    <div className='group' onClick={handleClick}>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img
          src={
            'https://images.thdstatic.com/productImages/e1f8af99-7af9-45ee-8fdd-ae44760e3e0d/svn/milwaukee-janitorial-carts-sc38-64_1000.jpg'
          }
          alt='productImg'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='w-full border-[1px] px-2 py-4'>
        <div className='flex justify-between'>
          <div>
            <h2 className='font-bold text-base'>
              {product?.name?.substring(0, 15)}
            </h2>
            <h4 className='font-bold text-base'>{product?.price} $</h4>
          </div>

          <div className='flex gap-2 relative overflow-hidden w-28 text-sm'>
            <div className='text-sm relative w-28 flex gap-2 justify-end'></div>
            <p
              className=' z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 cursor-pointer duration-500'
              onClick={() =>
                // navigate(`/outfit-detail/${product?._id || product?.id}`)
                handleBuyProduct(product.id)
              }
            >
              Buy
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
