import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<UserProps, User> {
  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input id="user-name-input" />
        <button class="set-name">update name</button>
        <button class="set-age">set random age</button>
      </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onSetNameClicked,
      'click:.set-age': this.onSetAgeClicked,
    };
  }

  onSetNameClicked = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const newName = input.value;
      this.model.set({ name: newName });
    }
  };

  onSetAgeClicked = (): void => {
    this.model.setRandomAge();
  };
}
