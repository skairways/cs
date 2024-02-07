// Реализация функции аналогичной Array.prototype.flat

// Необходимо написать функцию, которая бы повторяло поведение Array.prototype.flat.

const flat = (arr, depth?: number) => {
  const result = [];

  for (let iter of arr) {
    if (Array.isArray(iter)) {
      if (depth > 0) {
        iter = flat(iter, --depth);
      }
      iter.map((el) => result.push(el));
    } else {
      result.push(iter);
    }
  }

  return result;
};

console.log(flat([[1, 2], [[1]], 2])); // [1, 2, [1], 2]
console.log(flat([[1, 2], [[1]], 2], 2)); // [1, 2, 1, 2]1
