import { Response, Request } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const getAll = async (_req: Request, res: Response) => {
  const categories = await prisma.category.findMany({
    orderBy: { order: 'asc' },
  });

  res.json(categories);
};
