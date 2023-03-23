import React from 'react'
import HeaderDark from '../components/HeaderDark'
import CONTACT from '../assets/contact.jpg'
import { Form, Input } from 'antd'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div>
      <HeaderDark />
      <div className='w-full m-auto text-white relative'>
        <img src={CONTACT} className='w-full h-[300px] object-cover' />
        <span className='absolute top-1/2 -translate-y-1/2 left-24 text-2xl font-bold'>
          CONTACT US
        </span>
      </div>

      <div className='p-24 flex gap-8'>
        <div className='w-1/2'>
          <h1 className='font-bold text-2xl mb-8'>
            We would love to hear from you.
          </h1>
          <p>
            If you have any query or any type of suggestion, you can contact us
            here. We would love to hear from you.
          </p>
          <Form layout='vertical' className='mt-8'>
            <div className='flex justify-between gap-4'>
              <Form.Item
                label='Name'
                name='name'
                className='w-full min-w-[200px] font-semibold'
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Email'
                name='email'
                className='w-full min-w-[200px] font-semibold'
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              label='Message'
              name='message'
              className='w-full min-w-[200px] font-semibold'
            >
              <Input.TextArea rows={5} />
            </Form.Item>

            <button className='text-white px-4 py-2  rounded-full text-base bg-orange my-12'>
              SEND MESSAGE
            </button>
          </Form>
        </div>

        <div className='w-1/2 flex flex-col gap-12'>
          <div>
            <h1 className='font-bold text-2xl mb-8'>Visit Us</h1>
            <span>R.88.OT.6, tầng 82 Landmark 81, TPHCM.</span>
          </div>

          <div>
            <h1 className='font-bold text-2xl mb-8'>Get In Touch</h1>
            <span>
              You can get in touch with us on this provided email. Email:
              hmjawad087@gmail.com
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
