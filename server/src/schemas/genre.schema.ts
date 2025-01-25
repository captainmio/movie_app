import {z} from 'zod'

export const zGenreSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  description: z.string()
});

