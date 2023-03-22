import React from 'react'
import TREND1 from '../assets/trend1.jpg'

const Thumbnail = () => {
  return (
    <div className='flex flex-col items-center max-w-[30%]'>
      <img src={TREND1} className='w-1/2 object-cover' />
      <h4 className='text-base font-semibold  my-4'>Long Coats</h4>
      <p className='text-center mb-4 max-w-[300px]'>
        With the seasons changing soon, finding some men's winter coats will be
        important. Update your wardrobe with some new coats this season!
      </p>
    </div>
  )
}

export default Thumbnail
