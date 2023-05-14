import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
});

axiosInstance.interceptors.request((config) => config);

axiosInstance.interceptors.response((response) => {
  if (response.status !== 200) {
  }

  return response;
});

export default axiosInstance;
