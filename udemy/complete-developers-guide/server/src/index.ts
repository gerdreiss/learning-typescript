import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { router } from './routes/loginRoutes';

express()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieSession({ keys: ['ecryption-key'] }))
  .use(router)
  .listen(3000, () => {
    console.log('Listening on port 3000');
  });
