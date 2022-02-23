// first implementation
// class Sorter {
//   constructor(public collection: number[] | string) {}
//   sort(): void {
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             const aux = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = aux;
//           }
//         }
//         if (typeof this.collection === 'string') {
//           // do the compare/swap thing for strings here
//         }
//       }
//     }
//   }
// }

import { Characters } from './Characters';
import { Numbers } from './Numbers';
import { Sorter } from './Sorter';

// const sorter = new Sorter([10, 2, -5, 0]);
const numbers = new Numbers([10, 2, -5, 0, -1000]);
const numberSorter = new Sorter(numbers);
numberSorter.sort();
console.log(numberSorter.sortable);

const str = 'Xabaay';
numberSorter.sort();
const stringSorter = new Sorter(new Characters(str));
stringSorter.sort();
console.log(stringSorter.sortable);
