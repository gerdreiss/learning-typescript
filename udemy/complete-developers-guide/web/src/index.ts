import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.make({ name: 'Jake', age: 24 });
const element = document.getElementById('app');
if (element) {
  const userForm = new UserForm(element, user);
  userForm.render();
} else {
  throw new Error('App element not found');
}
