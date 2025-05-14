import { RequestHandler } from 'express';
import { signToken } from '../helpers/signToken';
import { Role } from '../types';
import { mergeGuestAndUserCarts } from '../helpers/mergeGuestAndUserCarts';

export const callbackHandler: RequestHandler = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user) {
      throw new Error('User not found in request');
    }

    await mergeGuestAndUserCarts(user.id, req.cookies.cartId);

    const accessToken = signToken(
      { id: user.id, role: Role.User },
      process.env.JWT_ACCESS_SECRET!,
      '15m',
    );

    const refreshToken = signToken(
      { id: user.id, role: Role.User },
      process.env.JWT_REFRESH_SECRET!,
      '7d',
    );

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 15 * 60 * 1000,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.redirect(process.env.FRONTEND_URL!);
  } catch (error) {
    next(error);
  }
};
