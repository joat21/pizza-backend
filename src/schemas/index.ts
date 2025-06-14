import { z } from 'zod';

export const PhoneSchema = z
  .string()
  .transform((value) => '+' + value.replace(/\D/g, ''))
  .refine((value) => /^\+7\d{10}$/.test(value), {
    message: 'Invalid phone format',
  });
