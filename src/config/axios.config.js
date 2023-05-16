import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
});

axiosInstance.interceptors.request.use((config) => config);

axiosInstance.interceptors.response.use((response) => response);

export default axiosInstance;
