import { z } from 'zod';

const PhoneSchema = z
  .string()
  .transform((value) => '+' + value.replace(/\D/g, ''))
  .refine((value) => /^\+7\d{10}$/.test(value), { message: 'Invalid phone format' });

export const OrderBodySchema = z.object({
  name: z.string().nonempty(),
  surname: z.string().nonempty(),
  email: z.string().email(),
  phone: PhoneSchema,
  address: z.string().nonempty(),
  comment: z.string().optional(),
});

export const OrderQuerySchema = z.object({
  cartId: z.string().optional(),
});
