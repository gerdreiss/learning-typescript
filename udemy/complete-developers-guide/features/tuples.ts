const drinkable = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

// putting the types in the type annotation array makes this a tuple
const pepsi: Drink = ['brown', true, 40];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  hp: 400,
  weight: 3354,
};
