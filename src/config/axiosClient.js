import axios from 'axios'
import { LOCAL_STORAGE_ITEMS } from '../constants/common'

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN)

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
