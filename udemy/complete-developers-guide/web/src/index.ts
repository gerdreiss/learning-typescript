import { User } from './models/User';

const users = User.collection();
users.on('change', () => {
  console.log(users);
});
users.fetch();
