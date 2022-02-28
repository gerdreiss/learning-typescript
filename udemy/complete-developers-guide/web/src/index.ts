import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();

console.log(user);

user.set({ name: 'Michael', age: 100 });
user.save();

user.fetch();

console.log(user);
