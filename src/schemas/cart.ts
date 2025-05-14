import { z } from 'zod';

export const CartItemParamsSchema = z.object({
  id: z.string().uuid(),
});

export const UpdateCartItemBodySchema = z.object({
  amount: z.number().min(1).max(100),
});

export const AddCartItemBodySchema = z.object({
  pizzaVariantId: z.string().uuid(),
});
