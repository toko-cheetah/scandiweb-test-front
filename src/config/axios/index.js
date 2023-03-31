import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://scandiweb-test-back.000webhostapp.com/',
  timeout: 1500
})

export default axiosInstance
