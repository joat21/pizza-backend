import { z } from 'zod';
import { UserBodySchema } from '../schemas/user';

export type UserBody = z.infer<typeof UserBodySchema>;
