export interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(update: UserProps): void {
    // if (!update['name']) {
    //   this.data['name'] = update['name'];
    // }
    // if (!update['age']) {
    //   this.data['age'] = update['age'];
    // }
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: () => {}): void {
    // TODO
  }

  trigger(eventName: string): void {
    // TODO
  }
}
