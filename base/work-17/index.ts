// Необходимо написать парсерный генератор tag

import { seq } from "./seq";
import { tag } from "./tag";
import { take } from "./take";

// Функция принимает строку и возвращает парсер, который считывает в заданному Iterable указанную строку.

// const fnTag = tag("function")("as function function foo() {}");

// console.log(fnTag.next()); // {done: true, value: {type: 'TAG', value: 'function'}}

// Необходимо написать парсерный генератор take

// Функция принимает функцию или регулярное выражение и возвращает парсер, который считывает символы походящие под условие.
// Генератор должен настраиваться опциональными параметрами min и max для указания минимального и максимального количество считанных символов.

// const takeNumber = take(/\d/)("qwer 1234 foo 777");

// console.log(takeNumber.next()); // {done: true, value: {type: 'TAKE', value: '1234'}}

// const takeNumber2 = take(/\d/, { max: 2 })("1234 foo");

// console.log(takeNumber2.next()); // {done: true, value: {type: 'TAKE', value: '12'}}

// Необходимо написать парсерный комбинатор seq

// Функция принимает множество парсеров и возвращает новый, который последовательно считывает символы походящие под заданные парсеры.

const fnExpr = seq(
  tag("function "),

  take(/[a-z_$]/i, { max: 1 }),
  take(/\w/, { min: 0 }),

  tag("()")
)("function boo() {}");

console.log(fnExpr.next()); // {done: true, value: {type: 'SEQ', value: 'function foo()'}}
