import { RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const guestCartHandler: RequestHandler = async (req, res, next) => {
  const isGuest = !req.user;

  if (isGuest) {
    let cartId = req.cookies.cartId;

    if (!cartId) {
      cartId = uuidv4();
    }

    res.cookie('cartId', cartId, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    req.guestCartId = cartId;
  }

  next();
};
