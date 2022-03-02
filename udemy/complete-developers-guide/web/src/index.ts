import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.make({ name: 'Jake', age: 24 });
const app = document.getElementById('app');
if (app) {
  const userEdit = new UserEdit(app, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('App element not found');
}
