import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Eventing } from './Eventing';
import { HttpSync } from './HttpSync';
import { Model } from './Model';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static make(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new HttpSync<UserProps>(rootUrl)
    );
  }

  static collection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, User.make);
  }
}
