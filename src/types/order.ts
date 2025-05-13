import { z } from 'zod';
import { OrderBodySchema, OrderQuerySchema } from '../schemas/order';

export type OrderBody = z.infer<typeof OrderBodySchema>;
export type OrderQuery = z.infer<typeof OrderQuerySchema>;
