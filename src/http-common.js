import axios from "axios";
// const token = localStorage.getItem('token');


// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
const instance = axios.create({
    baseURL: 'http://10.90.80.124:7880/api/v1',
})

instance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('token');
      config.headers.Authorization = `Bearer ${accessToken}`
      return config
    },
    (error) => Promise.reject(error),
  )
export default instance;
