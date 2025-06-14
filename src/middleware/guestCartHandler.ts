import { RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { cookieOptions } from '../config/constants';

export const guestCartHandler: RequestHandler = async (req, res, next) => {
  const isGuest = !req.user;

  if (isGuest) {
    let cartId = req.cookies.cartId;

    if (!cartId) {
      cartId = uuidv4();
    }

    res.cookie('cartId', cartId, {
      ...cookieOptions,
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });

    req.guestCartId = cartId;
  }

  next();
};
