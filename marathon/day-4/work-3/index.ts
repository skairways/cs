// Реализация функции каррирования

// Необходимо написать функцию, которая бы принимала другую функцию и возвращала её каррированную версию.

const sum = curry((a, b, c, z) => a + b + c + z);

function curry(fn) {
  return function inner(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    }

    return function (...restArgs) {
      const concated = [...args, ...restArgs];
      return inner(...concated);
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 10;
console.log(sum(1)(2)(3, 4)); // 10;
console.log(sum(1)(2, 3, 4)); // 10;
