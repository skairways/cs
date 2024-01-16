// Необходимо написать функцию forEach, которая могла бы обходить любой Iterable объект любого размера
// Работа функции не должна вызывать фризов. Функция должна возвращать Promise.

import { forEach } from "./for-each";

let total = 0;

forEach(new Array(50e7), () => {
  total++;
});

console.log(total);
 