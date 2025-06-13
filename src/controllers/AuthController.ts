import { RequestHandler } from 'express';

import { prisma } from '../prismaClient';

import { signToken } from '../helpers/signToken';
import { mergeGuestAndUserCarts } from '../helpers/mergeGuestAndUserCarts';

import { Role } from '../types';

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
      '15m'
    );

    const refreshToken = signToken(
      { id: user.id, role: Role.User },
      process.env.JWT_REFRESH_SECRET!,
      '7d'
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

export const getMe: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.sendStatus(401);
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.sendStatus(401);
      return;
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const logout: RequestHandler = async (_req, res, next) => {
  try {
    res.clearCookie('accessToken', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 15 * 60 * 1000,
    });

    res.clearCookie('refreshToken', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
