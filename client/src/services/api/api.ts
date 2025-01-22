// api.js (or apiClient.js)
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export type ApiResponse = {
  success: boolean,
  message?: string,
  data?: unknown; 
}

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, 
  timeout: 10000, // Optional timeout
  headers: {
    'Content-Type': 'application/json',

  },
});


api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {

    if (config.url && config.url.startsWith('/admin')) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      } else {
          return Promise.reject({response: {status: 401, data: {message: "Unauthorized"}}});
      }
    }
    return config; 
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);


export default api;