import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(4000, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log('[Server]: Server started at http://localhost:4000');
});
