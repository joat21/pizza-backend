import { z } from 'zod';
import { PhoneSchema } from '.';

export const OrderBodySchema = z.object({
  name: z.string().nonempty(),
  surname: z.string().nonempty(),
  email: z.string().email(),
  phone: PhoneSchema,
  address: z.string().nonempty(),
  comment: z.string().optional(),
});
