import { RequestHandler } from 'express';
import { prisma } from '../prismaClient';

import { parseSortParam } from '../helpers/parseSortParam';
import { PizzaParams, PizzaQuery } from '../types/pizza';

export const getAll: RequestHandler<any, any, any, PizzaQuery> = async (
  req,
  res,
  next
) => {
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
      variants: pizza.variants
        .map((variant) => ({
          id: variant.id,
          price: variant.price,
          doughType: variant.doughType.name,
          size: variant.pizzaSize.size,
        }))
        .sort(
          (a, b) =>
            a.doughType.localeCompare(b.doughType, 'ru') || a.size - b.size
        ),
    }));

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const getOneById: RequestHandler<PizzaParams> = async (
  req,
  res,
  next
) => {
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
      variants: pizza.variants
        .map((variant) => ({
          id: variant.id,
          price: variant.price,
          doughType: variant.doughType.name,
          size: variant.pizzaSize.size,
        }))
        .sort(
          (a, b) =>
            a.doughType.localeCompare(b.doughType, 'ru') || a.size - b.size
        ),
    });
  } catch (error) {
    next(error);
  }
};
