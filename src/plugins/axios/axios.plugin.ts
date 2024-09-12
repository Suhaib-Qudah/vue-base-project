import axios, { type InternalAxiosRequestConfig } from 'axios';
import { setHeaders } from './headers.axios.ts';
import { handleAxiosError } from './error.axios.ts';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => setHeaders(config),
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  async (response) => response,
  async (error) => handleAxiosError(error)
);

export default axiosInstance;
