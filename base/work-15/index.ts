// TODO: Необходимо написать итератор для генерации случайных чисел по заданным параметрам

import { filter } from "./filter";
import { mapSeq } from "./map-seq";
import { random } from "./random-int";
import { Range } from "./range";
import { seq } from "./seq";
import { take } from "./take";
import { zip } from "./zip";

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

// const symbolRange = new Range("a", "f");

// console.log(Array.from(symbolRange)); // ['a', 'b', 'c', 'd', 'e', 'f']

// const numberRange = new Range(-5, 1);

// console.log(Array.from(numberRange.reverse())); // [1, 0, -1, -2, -3, -4, -5]

// TODO: Необходимо написать функцию seq, которая бы принимала множество Iterable объектов и возвращала итератор по их элементам

// console.log(...seq([1, 2], new Set([3, 4]), 'bla')); // 1, 2, 3, 4, 'b', 'l', 'a'

// TODO: Необходимо написать функцию zip, которая бы принимала множество Iterable объектов и возвращала итератор по кортежам их элементов

// console.log(...zip([1, 2], new Set([3, 4]), 'bl'), 'qwe'); // [[1, 3, b], [2, 4, 'l']]

// TODO: Необходимо написать функцию, которая принимала бы любой Iterable объект и Iterable с функциями и возвращала итератор где каждому элементу левого Iterable последовательно применяются все функции из правого

console.log(...mapSeq([1, 2, 3], [(el) => el * 2, (el) => el - 1])); // [1, 3, 5]