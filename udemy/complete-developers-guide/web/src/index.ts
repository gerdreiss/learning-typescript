import { User } from './models/User';

const user = new User({ name: 'Joe', age: 42 });
user.set({ name: 'Jake', age: 99 });
user.set({ name: 'Jack', age: 90 });

console.log(user.get('name'));
console.log(user.get('age'));
