import { Numbers } from './Numbers';

export class Sorter {
  constructor(public collection: Numbers) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //if (this.collection[j] > this.collection[j + 1]) {
        if (this.collection.gt(j, j + 1)) {
          // const aux = this.collection[j];
          // this.collection[j] = this.collection[j + 1];
          // this.collection[j + 1] = aux;
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
