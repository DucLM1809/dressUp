import React, { useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import POSTER1 from '../assets/DRESSUPposter-01.png'
import POSTER2 from '../assets/DRESSUPposter-02.png'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [POSTER1, POSTER2]

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
  }

  return (
    <div className='w-full h-auto overflow-hidden'>
      <div className='w-screen h-screen relative'>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className='w-[400vw] h-full flex transition-transform duration-1000'
        >
          <img
            className='w-screen h-full object-cover'
            src={data[0]}
            alt='img1'
          />
          <img
            className='w-screen h-full object-cover'
            src={data[1]}
            alt='img2'
          />
        </div>

        {/* <div className='absolute w-fit left-0 right-0 mx-auto flex justify-between gap-8 bottom-1/2'> */}
        <div
          onClick={prevSlide}
          className='absolute bottom-1/2 left-6 w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'
        >
          <HiArrowLeft />
        </div>
        <div
          onClick={nextSlide}
          className='absolute bottom-1/2 right-8 w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'
        >
          <HiArrowRight />
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Banner
