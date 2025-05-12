import { z } from 'zod';

export const PizzaParamsSchema = z.object({
  id: z.string().uuid(),
});

export const PizzaQuerySchema = z
  .object({
    categoryId: z.string().uuid(),
    sortBy: z.string(),
  })
  .partial();
