interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}\nYear: ${this.year}\nBroken: ${this.broken}`;
  },
};

const drink = {
  color: 'brown',
  carbonate: true,
  sugar: 40,
  summary(): string {
    return `This drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (
  item: Reportable
  // {
  // 	name: string;
  // 	year: number;
  // 	broken: boolean;
  // }
) => {
  console.log(item.summary());
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
};

printSummary(oldCivic);
printSummary(drink);
