import express, { Express } from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import './auth';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(passport.initialize());

app.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: false }),
  (req, res) => {
    const { token } = req.user as { token: string };
    res.send(`
      <script>
        window.opener.postMessage({ token: "${token}" }, "*");
        window.close();
      </script>
    `);
  }
);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log(`[Server]: Server started at http://localhost:${PORT}`);
});
