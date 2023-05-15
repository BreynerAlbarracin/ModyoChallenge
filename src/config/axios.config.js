import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
});

axiosInstance.interceptors.request.use((config) => config);

axiosInstance.interceptors.response.use((response) => {
  if (response.status !== 200) {
    console.log('');
  }

  return response;
});

export default axiosInstance;
