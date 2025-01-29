import Axios from 'axios';
import Api, { ApiResponse } from './api'

export const getTags = async () => {
  try {
    const response = await Api.get('/admin/tags');
    return response.data as ApiResponse;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      const { response } = error;
      console.log('Error Response:', response?.data, response?.status);
      return { ...response?.data };
    }
  }
}