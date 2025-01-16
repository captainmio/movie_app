import { RegisterFormInputs } from '../../pages/Register'
import Api, { ApiResponse } from './api'


export const signUp = async (formData: RegisterFormInputs) => {
  const response = await Api.post('/auth/register', formData);

  return response.data as ApiResponse;
}