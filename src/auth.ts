import passport from 'passport';
import { Strategy as GitHubStrategy, Profile } from 'passport-github2';
import { VerifyCallback } from 'passport-oauth2';

import { prisma } from './prismaClient';
import { DEFAULT_AVATAR_URL } from './config/constants';

const PORT = process.env.PORT || 3000;
const GITHUB_CALLBACK_URL =
  process.env.GITHUB_CALLBACK_URL || `http://localhost:${PORT}/auth/github/callback`;

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      callbackURL: process.env.GITHUB_CALLBACK_URL || GITHUB_CALLBACK_URL,
    },
    async (_accessToken: string, _refreshToken: string, profile: Profile, done: VerifyCallback) => {
      try {
        let user = await prisma.user.findUnique({
          where: { oauthId: profile.id },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              oauthId: profile.id,
              oauthProvider: profile.provider,
              name: profile.username || profile.displayName,
              avatarUrl: profile.photos?.[0]?.value || DEFAULT_AVATAR_URL,
            },
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);
