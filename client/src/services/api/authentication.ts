import { RegisterFormInputs } from '../../pages/Register'
import Api from './api'

type RegisterResponse = {
  success: boolean,
  message?: string,
  data?: unknown; 
}

export const signUp = async (formData: RegisterFormInputs) => {
  const response = await Api.post('/register', formData);

  return response.data as RegisterResponse;
}