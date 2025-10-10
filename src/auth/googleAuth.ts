import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import { VerifyCallback } from 'passport-oauth2';

import { prisma } from '../prismaClient';

const PORT = process.env.PORT || 3000;
const GOOGLE_CALLBACK_URL =
  process.env.GOOGLE_CALLBACK_URL ||
  `http://localhost:${PORT}/auth/google/callback`;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        let user = await prisma.user.findUnique({
          where: { oauthId: profile.id },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              oauthId: profile.id,
              oauthProvider: profile.provider,
              name: profile.name?.givenName || '',
              surname: profile.name?.familyName || '',
              email: profile.emails?.[0].value || '',
              phone: '',
            },
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
