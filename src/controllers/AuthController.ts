import { RequestHandler } from 'express';

export const callbackHandler: RequestHandler = async (req, res) => {
  const token = req.user?.token;

  res.send(`
      <script>
        window.opener.postMessage({ token: "${token}" }, "*");
        window.close();
      </script>
    `);
};
