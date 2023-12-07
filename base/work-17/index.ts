import { or } from "./or";
import { repeat } from "./repeat";
import { seq } from "./seq";
import { tag } from "./tag";
import { take } from "./take";

//*Необходимо написать парсерный генератор tag

// Функция принимает строку и возвращает парсер, который считывает в заданному Iterable указанную строку.

// const fnTag = tag("function")("as function function foo() {}");

// console.log(fnTag.next()); // {done: true, value: {type: 'TAG', value: 'function'}}

//*Необходимо написать парсерный генератор take

// Функция принимает функцию или регулярное выражение и возвращает парсер, который считывает символы походящие под условие.
// Генератор должен настраиваться опциональными параметрами min и max для указания минимального и максимального количество считанных символов.

// const takeNumber = take(/\d/)("qwer 1234 foo 777");

// console.log(takeNumber.next()); // {done: true, value: {type: 'TAKE', value: '1234'}}

// const takeNumber2 = take(/\d/, { max: 2 })("1234 foo");

// console.log(takeNumber2.next()); // {done: true, value: {type: 'TAKE', value: '12'}}

//*Необходимо написать парсерный комбинатор seq

// Функция принимает множество парсеров и возвращает новый, который последовательно считывает символы походящие под заданные парсеры.

// const fnExpr = seq(
//   tag("function "),

//   take(/[a-z_$]/i, { max: 1 }),
//   take(/\w/, { min: 0 }),

//   tag("()")
// )("function boo() {}");

// console.log(fnExpr.next()); // {done: true, value: {type: 'SEQ', value: 'function foo()'}}

//*Необходимо написать парсерный комбинатор or

//Функция принимает множество парсеров и возвращает новый, который пытается применить первые иетратор, а если это невозможно, то пробует второй и т.д.

// const boolExpr = or(tag("true"), tag("false"))("false");

// console.log(boolExpr.next()); // {done: true, value: {type: 'TAG', value: 'false'}}

//*Необходимо написать парсерный комбинатор repeat

// Функция принимает парсер и параметры min/max и возвращает новый, который применяет заданный итератор указанное количество раз.

const takeNumbers = repeat(seq(take(/\d/), tag(",")))(
  "100,200,300,"
);

console.log(takeNumbers.next()); // {done: false, value: {type: 'SEQ', value: '100,'}}
console.log(takeNumbers.next().value[0]); // {done: false, value: {type: 'SEQ', value: '200,'}}
// console.log(takeNumbers.next()); // {done: false, value: {type: 'SEQ', value: '300,'}}
