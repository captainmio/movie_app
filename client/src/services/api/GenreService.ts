import Axios from 'axios';
import Api, { ApiResponse } from './api'
import { GenreFormInputs } from '../../pages/genre/GenreForm';

const baseUrl: string = 'genres';

export const getGenres = async () => {
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

export const addGenre = async (formData: GenreFormInputs) => {
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

export const getGenreById = async (id: string) => {
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

export const editGenre = async (id: string, payload: GenreFormInputs) => {
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

export const deleteGenre = async (id: string) => {
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