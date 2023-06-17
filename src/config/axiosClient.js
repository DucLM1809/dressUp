import axios from 'axios'

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: true
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    return Promise.reject(err)
  }
)

export default axiosClient
