import { prisma } from '../prismaClient';

export const getOrCreateCart = async (
  userId?: string,
  guestCartId?: string
) => {
  let cart = null;

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
  }

  return cart;
};

export const getOrCreatePopulatedCart = async (
  userId?: string,
  guestCartId?: string
) => {
  const cart = await getOrCreateCart(userId, guestCartId);

  if (!cart) {
    return null;
  }

  const fullCart = await prisma.cart.findFirst({
    where: { id: cart.id },
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

  return fullCart;
};
