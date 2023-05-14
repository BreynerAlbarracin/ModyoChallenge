import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
});

axiosInstance.interceptors.request((config) => {
    return config;
});

axiosInstance.interceptors.response((response) => {
    return response;
});

export default axiosInstance;
