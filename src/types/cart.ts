import { z } from 'zod';
import {
  AddCartItemBodySchema,
  CartItemParamsSchema,
  CartItemQuerySchema,
  UpdateCartItemBodySchema,
} from '../schemas/cart';

export type CartItemParams = z.infer<typeof CartItemParamsSchema>;
export type CartItemQuery = z.infer<typeof CartItemQuerySchema>;

export type UpdateCartItemBody = z.infer<typeof UpdateCartItemBodySchema>;
export type AddCartItemBody = z.infer<typeof AddCartItemBodySchema>;
