import React from 'react'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import MOMO_QR from '../assets/momoQR.jpg'
import { Modal } from 'antd'
import AxiosPost from '../config/axiosPost'
import { NotificationCustom } from '../components/Notification'

const { confirm } = Modal

const PricingInfoPage = () => {
  const price = useSelector((state) => state.price?.price)
  const subscriptionId = useSelector((state) => state.price?.subscriptionId)

  const handleConfirm = () => {
    confirm({
      title: 'Confirm',
      content: (
        <>
          <div>
            Thank you for your payment! Our staff will check and your
            subscription will be applied if it's valid! If things don't go well,
            please contact us at:
          </div>
          <span className='text-blue-500'>dressup.work@gmail.com</span>
        </>
      ),
      onOk: () => {
        AxiosPost('payments/request', {
          price,
          subscriptionId
        })
          .then(() =>
            NotificationCustom({
              type: 'success',
              message: 'Success',
              description: 'We have received you payment!'
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
    })
  }

  return (
    <div>
      <HeaderDark />

      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Boost your unlimited styles with DressUp Premium
            </h2>
          </div>
          <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
            <div className='p-8 sm:p-10 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-gray-900'>
                {price === 14000 && 'Monthly Premium'}
                {price === 150000 && 'Yearly Premium'}
              </h3>

              <div className='mt-10 flex items-center gap-x-4'>
                <h4 className='flex-none text-sm font-semibold leading-6 text-[#ff993a]'>
                  What’s included
                </h4>
                <div className='h-px flex-auto bg-gray-100'></div>
              </div>
              {price === 14000 && (
                <ul
                  role='list'
                  className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
                >
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Individual configuration
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Unlimited outfits in My Closet
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Unlimited AI suggestions per day
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Online + Offline support (for users in Ho Chi Minh City)
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Unlimited styles suggested, lastest trends
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Faster AI generating speed
                  </li>
                </ul>
              )}
              {price === 150000 && (
                <ul
                  role='list'
                  className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
                >
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Individual configuration
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Unlimited outfits in My Closet
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Unlimited AI suggestions per day
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Online + Offline support (for users in Ho Chi Minh City)
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Unlimited styles suggested, lastest trends
                  </li>
                  <li className='flex gap-x-3'>
                    <svg
                      className='h-6 w-5 flex-none text-[#ff993a]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    Faster AI generating speed
                  </li>
                </ul>
              )}
            </div>
            <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
              <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
                <div className='mx-auto max-w-xs px-8'>
                  <p className='text-sm text-orange'>
                    Make sure you send the exact amount!
                  </p>
                  <p className='mt-6 flex items-baseline justify-center gap-x-2 mb-3'>
                    <span className='text-5xl font-bold tracking-tight text-gray-900'>
                      {price}
                    </span>
                    <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                      đ
                    </span>
                  </p>
                  <img alt='qr' src={MOMO_QR} />

                  <div
                    class='bg-amber-100 border-t-4 border-amber-500 rounded-b text-gray-900 px-4 py-3 shadow-md'
                    role='alert'
                  >
                    <div>
                      <p class='font-bold mb-1'>Payment Message</p>
                      <p class='text-sm font-semibold text-gray-600'>
                        [YOUR_EMAIL] - PREMIUM {price == 9 ? '1' : '2'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleConfirm}
                    className='mt-10 block w-full rounded-md bg-[#ff993a] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#f9aa61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9aa61]'
                  >
                    Confirm Transaction
                  </button>
                  <p className='mt-6 text-xs leading-5 text-gray-600'>
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PricingInfoPage
