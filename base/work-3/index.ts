import { LinkedList } from "./linkedList";
import { Structure } from "./structure";

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);

// console.log(list.first?.value); // 1
// console.log(list.last?.value); // 3
// console.log(list.first?.next?.value); // 2
// console.log(list.first?.next?.prev?.value); // 1

// for (const value of list) {
//   console.log(value);
// }

const jackBlack = new Structure([
  ['name', 'utf16', 10], // Число - это максимальное количество символов
  ['lastName', 'utf16', 10],
  ['age', 'u16'] // uint16
]);

jackBlack.set('name', 'JackJackJack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);
console.log(jackBlack.get('name')); // 'JackJackJa'
console.log(jackBlack.get('lastName')); // 'Black'
console.log(jackBlack.get('age')); // 53
console.log(jackBlack)