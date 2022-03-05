import { Request, Response } from 'express';
import { bodyValidator, controller, get, post } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'e@mail.com' && password === 'password') {
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
  }

  @get('/logout')
  logout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
