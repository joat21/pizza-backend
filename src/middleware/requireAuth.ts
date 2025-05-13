import { RequestHandler } from 'express';

export const requireAuth: RequestHandler = async (req, res, next) => {
  if (!req.user) {
    res.sendStatus(401);
    return;
  }

  next();
};
