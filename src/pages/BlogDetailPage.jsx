import React from 'react'
import HeaderDark from '../components/HeaderDark'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import Blog1 from '../features/Blog1'
import Blog2 from '../features/Blog2'

const BlogDetailPage = () => {
  const { id } = useParams()

  return (
    <div>
      <HeaderDark />
      {Number(id) === 1 && <Blog1 />}
      {Number(id) === 2 && <Blog2 />}
      <Footer />
    </div>
  )
}

export default BlogDetailPage
