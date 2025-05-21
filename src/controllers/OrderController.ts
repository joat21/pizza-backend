import { RequestHandler } from 'express';
import { prisma } from '../prismaClient';
import { OrderBody } from '../types/order';

export const create: RequestHandler<any, any, OrderBody> = async (
  req,
  res,
  next
) => {
  try {
    const userId = req.user?.id;
    const guestCartId = req.guestCartId;
    const { name, surname, email, phone, address, comment } = req.body;

    let cart;

    if (userId) {
      cart = await prisma.cart.upsert({
        where: { userId },
        create: { userId },
        update: {},
      });
    } else if (guestCartId) {
      cart = await prisma.cart.upsert({
        where: { id: guestCartId },
        create: { id: guestCartId },
        update: {},
      });
    } else {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }

    const cartItems = await prisma.cartItem.findMany({
      where: { cartId: cart.id },
      include: {
        pizzaVariant: {
          select: {
            price: true,
          },
        },
      },
    });

    if (cartItems.length === 0) {
      res.status(400).json({
        message: 'Unable to create order: cart is empty',
      });
      return;
    }

    await prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          fullName: name + ' ' + surname,
          email,
          phone,
          address,
          comment,
          totalPrice: cartItems.reduce(
            (sum, cartItem) =>
              sum + cartItem.pizzaVariant.price * cartItem.amount,
            0
          ),
          userId,
        },
      });

      await tx.orderItem.createMany({
        data: cartItems.map((cartItem) => ({
          orderId: order.id,
          pizzaVariantId: cartItem.pizzaVariantId,
          amount: cartItem.amount,
          priceAtOrder: cartItem.pizzaVariant.price,
        })),
      });

      await tx.cart.delete({ where: { id: cart.id } });
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.user?.id;

    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            pizzaVariant: {
              include: {
                doughType: true,
                pizzaSize: true,
                pizza: {
                  select: {
                    title: true,
                    imageUrl: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (orders.length === 0) {
      res.json([]);
      return;
    }

    const response = orders.map((order) => ({
      id: order.id,
      createdAt: order.createdAt,
      totalPrice: order.totalPrice,
      comment: order.comment,
      items: order.items.map((item) => ({
        id: item.id,
        title: item.pizzaVariant.pizza.title,
        imageUrl: item.pizzaVariant.pizza.imageUrl,
        doughType: item.pizzaVariant.doughType.name,
        size: item.pizzaVariant.pizzaSize.size,
        amount: item.amount,
        price: item.priceAtOrder * item.amount,
      })),
    }));

    res.json(response);
  } catch (error) {
    next(error);
  }
};
