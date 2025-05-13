import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { signToken } from './signToken';

export const verifyAndRefreshTokens = async (
  req: Request,
  res: Response,
): Promise<{ valid: boolean; accessToken?: jwt.JwtPayload }> => {
  const accessToken = req.cookies['access_token'];
  const refreshToken = req.cookies['refresh_token'];

  try {
    const decodedAccess = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!) as jwt.JwtPayload;

    return { valid: true, accessToken: decodedAccess };
  } catch (error) {
    try {
      const decodedRefresh = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET!,
      ) as jwt.JwtPayload;

      const newAccessToken = signToken(
        { id: decodedRefresh.id, role: decodedRefresh.role },
        process.env.JWT_REFRESH_SECRET!,
        '15m',
      );

      res.cookie('access_token', newAccessToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        maxAge: 15 * 60 * 1000,
      });

      return { valid: true, accessToken: jwt.decode(newAccessToken) as jwt.JwtPayload };
    } catch (error) {
      res.clearCookie('access_token');
      res.clearCookie('refresh_token');

      console.log(error);

      return { valid: false };
    }
  }
};
