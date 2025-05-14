import { z } from 'zod';
import { OrderBodySchema } from '../schemas/order';

export type OrderBody = z.infer<typeof OrderBodySchema>;
