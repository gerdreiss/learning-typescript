import { NextFunction, Request, Response } from 'express';
import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
  } else {
    res.status(403);
    res.send('Not permitted');
  }
}

@controller('/protected')
class ProtectedController {
  @get('')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome');
  }
}
