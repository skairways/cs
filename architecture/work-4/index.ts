// Функция для удобного создания перегрузок

import { indexedWrapper } from "./indexed-wrapper";
import { overload } from "./overload";
import { readonly } from "./readonly";

//* Необходимо написать функцию для удобного создания перегрузок на основе аргументов

const myFunction = overload([
  () => 100500,
  (a, b) => a + b,
  (a, b, c) => a * b * c,
]);

// 100500
console.log(myFunction());

// 3
console.log(myFunction(1, 2));

// 24
console.log(myFunction(2, 3, 4));

//* View для получения элементов из Map/Set по числовому индексу

// Необходимо написать функцию, которая принимает Map/Set объект и возвращает обертку, которая может получать значение по числовым индексам

const indexedMap = indexedWrapper(
  new Map([
    ["key1", "foo"],
    ["key2", "bar"],
  ])
);

// true
console.log(indexedMap.get("key1"), indexedMap.get("key1") === indexedMap[0]);

//* ReadonlyView объекта

// Необходимо написать функцию, которая принимает некоторый объект и возвращает его замороженную версию. при этом заморозка должна происходить рекурсивно (т.е. в глубину). Однако, оригинальный объект по прежнему можно менять, причем эти изменения должны быть видны и из замороженного объекта.

const obj = {
  a: 1,
  b: [1, 2, 3],
  mutate() {
    this.a++;
  },
};

// const readonlyObj = readonly(obj);

// readonlyObj.a++;

// /// true
// console.log(readonlyObj.a === 1);

// readonlyObj.mutate();

// /// true
// console.log(readonlyObj.a === 1);

// readonlyObj.b.push(10);

// // [1, 2, 3]
// console.log(readonlyObj.b);

// obj.a++;

// /// true
// console.log(readonlyObj.a === 2);
