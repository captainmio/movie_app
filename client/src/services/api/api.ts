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


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.data.message === 'Unauthorized')) {
      // this means the token is either expired or invalid, we want to redirect the user back to login page
      localStorage.removeItem('token'); // Clear the invalid token
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error);
  }
);


export default api;