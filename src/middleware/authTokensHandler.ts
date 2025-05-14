import { RequestHandler } from 'express';
import { verifyAndRefreshTokens } from '../helpers/verifyAndRefreshTokens';

export const authTokensHandler: RequestHandler = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken && !refreshToken) {
    next();
    return;
  }

  const { valid } = await verifyAndRefreshTokens(req, res);

  if (!valid) {
    res.sendStatus(401);
    return;
  }

  next();
};
