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
import { LinkedList } from './LinkedList';
import { Numbers } from './Numbers';
import { Sorter } from './Sorter';

// const sorter = new Sorter([10, 2, -5, 0, -1000]);
const numbers = new Numbers([10, 2, -5, 0, -1000]);
// const numberSorter = new Sorter(numbers);
numbers.sort();
console.log(numbers.data);

const str = 'Xabaay';
const characters = new Characters(str);
// const stringSorter = new Sorter(new Characters(str));
characters.sort();
console.log(characters.data);

const ll = new LinkedList();
ll.add(-3);
ll.add(100);
ll.add(5);
ll.add(-4);
ll.add(3);
ll.add(20);

// const listSorter = new Sorter(ll);
// listSorter.sort();
ll.sort();
ll.print();
