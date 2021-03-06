import { Sorter } from './Sorter';

export class Characters extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  gt(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const aux = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = aux;
    this.data = characters.join('');
  }
}
