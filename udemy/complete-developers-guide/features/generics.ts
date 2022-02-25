class Things<T> {
  constructor(public things: T[]) {}

  get(index: number): T {
    return this.things[index];
  }
}

function printThings<T>(arr: T[]): void {
  arr.forEach(console.log);
}

interface Printable {
  print(): void;
}

class Car {
  print() {
    console.log('Car');
  }
}
class House {
  print() {
    console.log('House');
  }
}

function printPrintables<T extends Printable>(printables: T[]): void {
  printables.forEach((element) => element.print());
}

printPrintables([new House(), new Car()]);
