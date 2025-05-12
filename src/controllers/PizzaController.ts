import { RequestHandler } from 'express';
import { PrismaClient } from '../generated/prisma';

import { parseSortParam } from '../helpers/parseSortParam';
import { PizzaParams, PizzaQuery } from '../types/pizza';

const prisma = new PrismaClient();

export const getAll: RequestHandler<any, any, any, PizzaQuery> = async (req, res, next) => {
  try {
    const { categoryId, sortBy } = req.query;

    const orderBy = parseSortParam(sortBy);

    const pizzas = await prisma.pizza.findMany({
      where: { categoryId },
      include: {
        variants: {
          include: {
            doughType: true,
            pizzaSize: true,
          },
        },
      },
      orderBy,
    });

    const response = pizzas.map((pizza) => ({
      ...pizza,
      variants: pizza.variants.map((variant) => ({
        id: variant.id,
        price: variant.price,
        doughType: variant.doughType.name,
        size: variant.pizzaSize.size,
      })),
    }));

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const getOneById: RequestHandler<PizzaParams> = async (req, res, next) => {
  try {
    const { id } = req.params;

    const pizza = await prisma.pizza.findUnique({
      where: { id },
      include: {
        variants: {
          include: {
            doughType: true,
            pizzaSize: true,
          },
        },
      },
    });

    if (!pizza) {
      res.status(404).json({ message: 'Pizza not found' });
      return;
    }

    res.json({
      ...pizza,
      variants: pizza.variants.map((variant) => ({
        id: variant.id,
        price: variant.price,
        doughType: variant.doughType.name,
        size: variant.pizzaSize.size,
      })),
    });
  } catch (error) {
    next(error);
  }
};
