import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<UserProps, User> {
  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">update name</button>
        <button class="set-age">set random age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onSetNameClicked,
      'click:.set-age': this.onSetAgeClicked,
      'click:.save-model': this.onSaveClicked,
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

  onSaveClicked = (): void => {
    this.model.save();
  };
}
