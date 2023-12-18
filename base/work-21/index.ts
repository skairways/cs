// Необходимо реализовать функцию curry с поддержкой "дырок"

import { compose } from "./compose";

// import { curry } from "./curry";

// const diff = curry((a, b) => a - b);

// console.log(diff(curry._, 10)(15)); // 5

// Необходимо реализовать функцию compose для композиции функций

const f = compose(
  (a) => a ** 2,
  (a) => a * 10,
  (a) => Math.sqrt(a) // Первая
);

console.log(f(16)); // 1600
