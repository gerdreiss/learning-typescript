const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];
const carMaker = carMakers[0];
const anotherCarMaker = carMakers.pop();

carMakers
  .map((car: String) => {
    return car.toUpperCase();
  })
  .filter((car: String) => {
    return car.length > 4;
  });

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
