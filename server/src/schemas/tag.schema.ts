import {z} from 'zod'

export const zTagSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  slug: z.string({
    required_error: "slug is required"
  }).regex(/^\/[a-z0-9-]+$/, {
    message: "Slug must start with '/' and contain only lowercase letters, numbers, and hyphens.",
  })
});

