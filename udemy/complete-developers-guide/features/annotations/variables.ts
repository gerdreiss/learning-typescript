let apples: number = 5;

apples = 10;
// does not compile:
// apples = true

let hasName: boolean = true;
let nothingMuch: null = null;
let speed: string = 'fast';
let nothing: undefined = undefined;
let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 4, 5];

// Classes
class Car {}
let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
let logNumber: (n: number) => void = (n: number) => {
  console.log(n);
};

// when to use annotations
// 1. function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);

// 2. when we declare a variable on one line, and init it later
let words = ['red', 'green', 'blue'];
let found: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    found = true;
  }
}

// 3. variable whose type cannot be inferred
let nums = [-10, -1, 12];
let hasPos = false;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    hasPos = nums[i];
  }
}
