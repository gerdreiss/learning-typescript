import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
  } else {
    res.status(403);
    res.send('Not permitted');
  }
}

const router = Router()
  .get('/', (req: Request, res: Response) => {
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
  })
  .get('/login', (req: Request, res: Response) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
  })
  .post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      email === 'e@mail.com' &&
      password === 'password'
    ) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send(`
        <div>
          <p>Invalid email or password.</p>
          <a href="/login">Try again</a>
        </div>
      `);
    }
  })
  .get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
  })
  .get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome');
  });

export { router };
