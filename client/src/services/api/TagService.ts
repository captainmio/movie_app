import Axios from 'axios';
import Api, { ApiResponse } from './api'
import { TagFormInputs } from '../../pages/tag/TagForm';

const baseUrl: string = 'tags';

export const getTags = async () => {
  try {
    const response = await Api.get(`/admin/${baseUrl}`);
    return response.data as ApiResponse;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      const { response } = error;
      console.log('Error Response:', response?.data, response?.status);
      return { ...response?.data };
    }
  }
}

export const addTag = async (formData: TagFormInputs) => {
  try {
    const response = await Api.post(`/admin/${baseUrl}/add`, formData);
    return response.data as ApiResponse;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      const { response } = error;
      console.log('Error Response:', response?.data, response?.status);
      return { ...response?.data };
    }
  }
}