export interface Sortable {
  length: number;
  gt(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public sortable: Sortable) {}

  sort(): void {
    const { length } = this.sortable;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //if (this.sortable[j] > this.sortable[j + 1]) {
        if (this.sortable.gt(j, j + 1)) {
          // const aux = this.sortable[j];
          // this.sortable[j] = this.sortable[j + 1];
          // this.sortable[j + 1] = aux;
          this.sortable.swap(j, j + 1);
        }
      }
    }
  }
}
