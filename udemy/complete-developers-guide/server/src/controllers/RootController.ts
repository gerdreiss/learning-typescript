import { Request, Response } from 'express';
import { controller, get } from './decorators';

@controller('/')
class RootController {
  @get('')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <p>You are logged in.</p>
          <a href="/protected">Protected area</a>
          <a href="/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <p>You are not logged in.</p>
          <a href="/login">Login</a>
        </div>
      `);
    }
  }
}
