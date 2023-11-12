// TODO: Необходимо написать итератор для генерации случайных чисел по заданным параметрам

import { filter } from "./filter";
import { random } from "./random-int";
import { Range } from "./range";
import { take } from "./take";

// TODO: Необходимо написать итератор для генерации случайных чисел по заданным параметрам

const randomInt = random(0, 100);
// console.log(randomInt.next());
// console.log(randomInt.next());
// console.log(randomInt.next());
// console.log(randomInt.next());

// TODO: Необходимо написать функцию take, которая принимает любой Iterable объект и возвращает итератор по заданному количеству его элементов

// console.log([...take(randomInt, 15)]);

// TODO: Необходимо написать функцию filter, которая принимает любой Iterable объект и функцию-предикат. И возвращает итератор по элементам которые удовлетворяют предикату.

// console.log([...take(filter(randomInt, (el) => el > 30), 15)]);

// TODO: Необходимо написать класс Range, который бы позволял создавать диапазоны чисел или символов, а также позволял обходить элементы Range с любого конца

const symbolRange = new Range("a", "f");

console.log(Array.from(symbolRange)); // ['a', 'b', 'c', 'd', 'e', 'f']

const numberRange = new Range(-5, 1);

console.log(Array.from(numberRange.reverse()));

// console.log(Array.from(numberRange.reverse())); // [1, 0, -1, -2, -3, -4, -5]
