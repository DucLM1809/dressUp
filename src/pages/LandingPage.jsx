import React from 'react'
import Header from '../components/Header'
import HERO from '../assets/hero.png'
import HERO2 from '../assets/hero2.png'
import BRAND from '../assets/brand.png'
import BRAND2 from '../assets/brand2.png'
import Thumbnail from '../components/Thumbnail'
import TREND2 from '../assets/trend2.jpg'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <img src={HERO} className='w-2/5 m-auto object-cover' />

      <div className='bg-[#F6E7CB] w-full flex flex-col items-center'>
        <div className='text-2xl my-12 font-medium'>TRENDS</div>
        <div className='flex items-center justify-center'>
          <Thumbnail src='https://i.pinimg.com/564x/b2/ab/82/b2ab824741b4dbfe0362ace56e1668ea.jpg' />
          <Thumbnail src='https://i.pinimg.com/564x/54/7e/54/547e546f20c19436b24433af4b421c77.jpg' />
          <Thumbnail src='https://i.pinimg.com/564x/3c/5c/7c/3c5c7c00afb8b07aa2edca3605d3b649.jpg' />
        </div>
      </div>

      <div className='w-full flex flex-col items-center'>
        <div className='text-2xl my-12 font-medium'>RECOMMENDED BRANDS</div>
        <div className='flex flex-wrap'>
          <img src={BRAND} className='w-1/5 h-[250px] object-contain' />
          <img
            src='https://img.ws.mms.shopee.vn/fe2253011f9c6e04693fddc74bcd37df'
            className='w-1/5 h-[250px] object-contain'
          />
          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8lISIAAAAaFRbc2tpzcXEjISKXl5cQCgwWEBGSkpK7uLl8eHmKiYkXEhMJAACtq6weHx/DwcIfGxzU1NQzLi+hoaH5+flsbGwdGBlQT1Dz8/MnIiMMAARiYGEWFBVYVlfp6Oipp6g8OjtISEjl4uMwMTBEQUKFhYVfX1/Mysu+vL22s7U0LzGGgYMsCdd7AAAElUlEQVR4nO3b6XqiMBgFYJIgRqtgjRpRcKuOS9u5/8sboIDsWltEM+f9KY3mPJSQfAFNAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3O+0NNNt2LOu1WdDtvuhM1ku8OI2636W7UR/apIIQwvemO1GU348RnLpruSU2GwiSOn9CgL033pQ7zbvAfGiQUTMHBxhtDjSigueypl9AfQ0O2Ox1J1e6I865le1eg4Xmls2HT3fl985Vl+P+iXkD+Z6Da6QtMza+ES6uvZD5vmDH8hDZt7aSqc9IJNRifjZruRn2k3NL9i1RuBE06tVVOF1D6/AEU2o30wGh9fZu1XtBG7vRSu8rp87q8YfpbbkvYp6HN9W0OUZtBMuGCVnnrfaxLhpBDZcOz420JuzyYJhFrcPlvz22+5v70I/lpzySlDG+hR+m0+Ebe75Q3TFhO75gw7FJ6AV6R0F8qeIv2Dm0VXQvXJXTY7QlJ7QnDPhKDj08NJCT3SuhjLL/mUyshEa+5AqFiCclydltCYj5OQr8CkbK0XBZVz4iRHoETCUW2XeZbHiYhP8m0+W40WXE7Sij2JQmtF01We5CEVuFdb7jtRGeYZm4ZccJ6Ck/3SqitVyxK+J4+8nQJaUkJQo8uRd5OH3i6hCXnUGqH8Keyw74qCTXtPUqY2VBSJ6Huqn4Od2HCTj/9uToJR27xT6mTcBMmpJmZqSoJpTZbBsfFn8wRVRJqG/761SpbL1EjodQGy6CY4Ihxtiz1fAmLnhAZTbn4KpfQXI44YcH6/xf8fkLW/siY9MY0mJQ6RNB27uvi9eH4c1xs9ZPN/BrWh2a2DMjNcEpqsM4mvy0YJxQllj96+queFXBWeOR1UXSNVq/xvdZi9pPNmnsmFNtT0cl4voTlhPXZy49DF+s0T5TQ6ywX3bK7hRoJPe6+pIrxPAlNntUxmV+ICh7GcxxG0rtIUUKDu65VhO4fayy1/06yur3FJ+NxQZG9pbahooS8OyzzWOfQLZ6X6t1x+FPE4a3kkShhfrbzK+64elofwqcqnXQYdRJ6Da3wzshWifLu8828yxPKI3PCa05XM6GmUxKNKucPVUoo5THcvrCPip7D+OfI+HzbVyvhJkrIz/NTtRIOwnpbcndDrYQT5RP2mOIJ5Vs0ObUUvQ4/4rdhlBxLpbY2ooCK3g/n+/h1mOQ+8NMlLNvllsNxHJCYiXJNlNCtOWH2KZeqNtUJi2rec32wiq/BzCZpvAKut+Ztz1oVpqksF9b4i3zz477j2nE+h/DkeY4S2quqLnjfki+XfychEaycma7FX6jTFLS3z6fPT0hT7/fGz0TZFV3w0NseiooTVnGsyTcSXuSmH1W48rk20nmahHSRLp2plNAv8Nv0b6YLaiUU1tt7dvdJnYRCWHQ7yRd3605IcxXqAumxtB+2ST8p2qr6JsuiFpn1T1LL7x8eruqC93O3vZw/bF8leTOWcZvkXU2+VDTvTgZDvex9iyu70G5/Y1LyMzeX2PFSGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH/nH1D3eB2gBRuMAAAAAElFTkSuQmCC'
            className='w-1/5 h-[250px] object-contain'
          />
          <img
            src='https://file.hstatic.net/1000281824/file/tote-1_33445b051a404bb790b6d0df0275ac8d.png'
            className='w-1/5 h-[250px] object-contain'
          />
          <img
            src='https://theme.hstatic.net/200000284249/1000799870/14/logo.png?v=2272'
            className='w-1/5 object-contain'
          />
          <img
            src='http://static.ybox.vn/2021/4/5/1619164610596-1565852925742-Logo-black-white-01.png'
            className='w-1/5  h-[250px] object-contain'
          />
          <img
            src='data:image/png;base64,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'
            className='w-1/5  h-[250px] object-contain'
          />
          <img
            src='https://cf.shopee.vn/file/e3fc221e2415e14c0b766fb2ac3687f3'
            className='w-1/5  h-[250px] object-contain'
          />
          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAC9vb3p6ekdHR3Ozs4aGhpnZ2fb29uQkJCqqqqjo6NVVVV8fHx1dXVFRUW1tbX19fVgYGDR0dH39/c+Pj7h4eGdnZ3n5+dQUFAxMTEPDw+UlJQrKyuLi4vY2NjGxsZvb29ISEgjIyM4ODhZWVktLS2CgoISEhKi7gTEAAAEdUlEQVR4nO3aC3OqOhSGYZZ4vyAo3qqtWvW0//8XnoQkBMdS8YynqPM+M3tLKLrzGWAldAcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/o1aZsO6e3UlDyhwKRyVhIW8ahsmf9/PS12ysfJ72/Xm+L8r2rSajnT+uPOFbfkxrpZsD2+odVGviP7UuHd/Vz63dt/LjM3XHVUg4UI1vnSprvamttfrT+ts8lzoymaqLqfGhY23MvqFEel8cFTpYnvDdHjHNRiz5EFlknyv9JGipnHWfqR2J7Nb8U+Qj2xq6qMs3aaZm0yRsX1rv7fv3csxeIzmkwVIk1o1QxJ21dfEJ1TVpuzWUnt0T2j0u4W/joQYte52LdNXhzcR+/vDufb5NMWEwkbV+8QmDTzusNuFvlcF9GelgkQSxHkhtumjcuce3OkuYmF4WEu7dj68nPMrKN7YidSdzzhKqQdQ3wkLCVfUx7Ks7zTZvvWV3mkdwnnCQ1e/y6/DX+ctEHTDrdU1jq4vFKU7v3uGbnSeMswsxTxge8xlLhYRBX9dAGZsiH+6zd2zu3uNblSV09dCV/CoJ1ch9HPx7wriT1/8anSdcSDMwCUemmucXVrWEgf6SpJ2fm3og6x7F84Qrf6dR9T8qzLgqJ9Rzm75vqYh36ul/dZYwLFQLtV24+9+QUH1NI9/oitQ8+S6v+DuRL/+jqwnNJaztVcK1uwenItvS9/yJYsKeLdP2Xqrm0Lv8Z1cTqgPs5TdWNXTlvp1W7VNvnzBU9cxUCVctxoVIVWZtA3dkS92y2ibYqrB+rIdZPe3izUnMsifwCdUkbuaOu55QnQGDZRIOsgKRfMtsGibdU/0LxMIKeOVXwLbiN/ylWOFOoz+q6ZbE2ZymLWf31XqYpxjjVRT73kdH163N7N3OwkzCzeBCIUE80/nsiZBEqvivhzXfZm5QvsYvjms4X/pGOp8/03O4agmfGQmfn0k46VzYX3/vw0iTnzaDJJuqXH8SlaRljYex9rUrfwClZ5kd/VJl1uYb/XyS+lA6+Wq1OJl5N7lvTVj3mulHcd4tHccWNrf6eYmEST6H1I8v7OpnYUfzJRKqtYSdjzZl5pYcJzszfY2EPTteXVm79WzqxvU1Em7t1deXU6B/+RAU+v0aCdODufo6sglmZj37pcJmXiOhiqZnKMlapuoOM9Z72q5GvkhCUy+m+u9tNoGZ51XjRRIm2YOxjT4z07bsdE9d5X+RhGoCs9C/NtJnZkc/9ZxUf4rxJAl1vUjNLKZvNs9/j//8CfXV15C23lSXYNjyHX2VhOrqa43sdKYt8cbVCpdw172wTfID/Oc8bkL9gHhsp6SRREe/nipf4x/zA/zHPHDCWPJlRePstLz6P4aeJeHSD0riN4NqCQd99wRVJTTbg7iGEL/7xz/mnolf6V//P1GFA7KE1uOt9eMo2vrNbr5/Ks2ffXfMAdto5ARBK298XP4TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA7+RfpvzD6MmBZEAAAAABJRU5ErkJggg=='
            className='w-1/5  h-[250px] object-contain'
          />
          <img
            src='data:image/png;base64,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'
            className='w-1/5  h-[250px] object-contain'
          />
        </div>
      </div>

      <div className='w-full flex flex-col items-center'>
        <img src={HERO2} className='w-2/5 m-auto' />
      </div>

      <div className='mt-4 w-full flex items-center p-10'>
        <div>
          <img
            src='https://i.pinimg.com/564x/8e/0f/bf/8e0fbf75317057a90ecacbb0656cb7c6.jpg'
            className='w-1/2'
          />
        </div>
        <div className='flex flex-col h-full'>
          <div className='text-2xl font-medium'>Vera Wang</div>
          <div className='flex gap-10 my-2'>
            <span>New</span>
            <span>All</span>
            <span>Top</span>
            <span>Bottom</span>
          </div>
          <div className='flex'>
            <div className='flex flex-col'>
              <img
                src='https://i.pinimg.com/564x/37/76/7a/37767a26ad4f607e113f27536d69168c.jpg'
                className='w-1/2'
              />
              <span className='font-bold text-sm text-center w-1/2'>
                LOOK 1
              </span>
            </div>
            <div className='flex flex-col'>
              <img
                src='https://i.pinimg.com/564x/c0/da/cd/c0dacd779850aec1168f293d3c735c3a.jpg'
                className='w-1/2'
              />
              <span className='font-bold text-sm text-center w-1/2'>
                LOOK 2
              </span>
            </div>
          </div>

          <span className='mt-4 underline underline-offset-2 decoration-gray-400 '>
            See More
          </span>
        </div>
      </div>

      <div className='bg-[#FDEDED] w-full flex flex-col items-center'>
        <div className='text-2xl my-12 font-medium'>KNOWLEDGES</div>
        <div className='flex items-center justify-center'>
          <Thumbnail src='https://i.pinimg.com/564x/9a/7a/19/9a7a19e74667aee85cc133a196b14c0c.jpg' />
          <Thumbnail src='https://i.pinimg.com/564x/8d/9b/1e/8d9b1ef1486033ec83ac70b2d30f50be.jpg' />
          <Thumbnail src='https://i.pinimg.com/564x/a7/01/3e/a7013e992a5a6e5e5146cb55fcdc86ab.jpg' />
        </div>
      </div>

      <div className='mt-4 w-full flex items-center p-10'>
        <div className='flex flex-col items-center'>
          <Thumbnail src='https://i.pinimg.com/564x/c4/2b/ec/c42becf2e7534424afb9dc2e1c74f56a.jpg' />
          <Thumbnail src='https://i.pinimg.com/564x/1b/71/77/1b7177a7bfdc12e2184f1310e24f34f8.jpg' />
        </div>
        <Thumbnail src='https://i.pinimg.com/564x/dc/6e/e0/dc6ee071549d55e2c7f801f8ccc0cf02.jpg' />
        <div className='flex flex-col items-center'>
          <Thumbnail src='https://i.pinimg.com/564x/8f/c6/01/8fc6016ff2d996ccb13a09cb34d17c55.jpg' />
          <Thumbnail src='https://i.pinimg.com/564x/d9/85/3d/d9853dce8c867dfe48ffe7a51ca56701.jpg' />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage
