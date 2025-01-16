import  Axios  from 'axios';
import { RegisterFormInputs } from '../../pages/Register'
import Api, { ApiResponse } from './api'


export const signUp = async (formData: RegisterFormInputs) => {
  try {
    const response = await Api.post('/auth/register', formData);
    return response.data as ApiResponse;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      const { response } = error;
      console.log('Error Response:', response?.data, response?.status);
      return { ...response?.data };
    }
  }
  
}