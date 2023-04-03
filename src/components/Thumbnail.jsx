import React from 'react'
import TREND1 from '../assets/trend1.jpg'

const Thumbnail = ({ src }) => {
  return (
    <div className='flex flex-col items-center w-full px-5 md:max-w-[30%] md:px-0'>
      <img src={src} className='w-full h-[300px]   object-contain' />
      <h4 className='text-base font-semibold my-4'>Long Coats</h4>
      <p className='text-sm md:text-base text-center mb-4 max-w-[300px]'>
        With the seasons changing soon, finding some men's winter coats will be
        important. Update your wardrobe with some new coats this season!
      </p>
    </div>
  )
}

export default Thumbnail
