import { z } from 'zod';
import { PhoneSchema } from '.';

export const UserBodySchema = z.object({
  name: z.string().min(2).or(z.literal('')),
  surname: z.string().min(2).or(z.literal('')),
  email: z.string().email().or(z.literal('')),
  phone: PhoneSchema.or(z.literal('')),
});
