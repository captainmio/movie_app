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


export const deleteTag = async (id: string) => {
  try {
    const response = await Api.delete(`/admin/${baseUrl}/delete/${id}`);
    return response.data as ApiResponse;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      const { response } = error;
      console.log('Error Response:', response?.data, response?.status);
      return { ...response?.data };
    }
  }
}


export const getTagById = async (id: string) => {
  try {
    const response = await Api.get(`/admin/${baseUrl}/${id}`);
    return response.data as ApiResponse;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      const { response } = error;
      console.log('Error Response:', response?.data, response?.status);
      return { ...response?.data };
    }
  }
}

export const editTag = async (id: string, payload: TagFormInputs) => {
  try {
    const response = await Api.put(`/admin/${baseUrl}/edit/${id}`, payload);
    return response.data as ApiResponse;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      const { response } = error;
      console.log('Error Response:', response?.data, response?.status);
      return { ...response?.data };
    }
  }
}