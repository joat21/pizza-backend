import passport from 'passport';
import { Strategy as GitHubStrategy, Profile } from 'passport-github2';
import { VerifyCallback } from 'passport-oauth2';
import dotenv from 'dotenv';

import { PrismaClient } from './generated/prisma';
import { DEFAULT_AVATAR_URL } from './config/constants';
import { signToken } from './helpers/signToken';
import { Role } from './config/types';

dotenv.config();

const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;
const GITHUB_CALLBACK_URL =
  process.env.GITHUB_CALLBACK_URL ||
  `http://localhost:${PORT}/auth/github/callback`;

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      callbackURL: process.env.GITHUB_CALLBACK_URL || GITHUB_CALLBACK_URL,
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        let user = await prisma.user.findUnique({
          where: { githubId: profile.id },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              githubId: profile.id,
              name: profile.username || profile.displayName,
              avatarUrl: profile.photos?.[0]?.value || DEFAULT_AVATAR_URL,
            },
          });
        }

        const token = signToken(user.id, Role.User);

        return done(null, { token });
      } catch (error) {
        return done(error);
      }
    }
  )
);
