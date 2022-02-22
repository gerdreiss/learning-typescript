export class Numbers {
  constructor(public data: number[]) {
    this.data = data;
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
