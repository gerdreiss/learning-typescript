// export interface Sortable {
//   length: number;
//   gt(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
  abstract length: number;
  abstract gt(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        //if (this.sortable[j] > this.sortable[j + 1]) {
        if (this.gt(j, j + 1)) {
          // const aux = this.sortable[j];
          // this.sortable[j] = this.sortable[j + 1];
          // this.sortable[j + 1] = aux;
          this.swap(j, j + 1);
        }
      }
    }
  }
}
