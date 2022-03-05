import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/ProtectedController';
import './controllers/RootController';

express()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieSession({ keys: ['encryption-key'] }))
  .use(AppRouter.getInstance())
  .listen(3000, () => {
    console.log('Listening on port 3000');
  });
