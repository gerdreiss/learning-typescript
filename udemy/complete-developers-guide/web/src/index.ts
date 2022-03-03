import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.make(json);
  }
);

users.on('change', () => {
  const app = document.getElementById('app');
  if (app) {
    new UserList(app, users).render();
  }
});
users.fetch();
