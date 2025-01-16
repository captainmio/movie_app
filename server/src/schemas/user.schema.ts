import {z} from 'zod'

export const createUser = z.object({
  firstName: z.string({
    required_error: "first name is required",
    invalid_type_error: "first name must be a string",
  }),
  lastName: z.string({
    required_error: "last name is required", 
    invalid_type_error: "last name must be a string",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

