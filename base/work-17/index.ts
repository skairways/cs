// Необходимо написать парсерный генератор tag

import { tag } from "./tag";

// Функция принимает строку и возвращает парсер, который считывает в заданному Iterable указанную строку.

const fnTag = tag("function")("as function function foo() {}");

console.log(fnTag.next()); // {done: true, value: {type: 'TAG', value: 'function'}}
