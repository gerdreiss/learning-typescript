class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('vroom vroom');
  }
  public honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }
  public drive(): void {
    super.drive();
    console.log('vrooooooom!');
  }
}

const vehicle = new Vehicle('red');
vehicle.drive();
vehicle.honk();

const car = new Car('blue', 4);
car.drive();
car.honk();
