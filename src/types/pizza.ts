import { z } from 'zod';
import { PizzaParamsSchema, PizzaQuerySchema } from '../schemas/pizza';

export type PizzaParams = z.infer<typeof PizzaParamsSchema>;
export type PizzaQuery = z.infer<typeof PizzaQuerySchema>;
