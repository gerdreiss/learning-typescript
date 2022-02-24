import { Sorter } from './Sorter';

export class Numbers extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  gt(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const aux = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = aux;
  }
}
