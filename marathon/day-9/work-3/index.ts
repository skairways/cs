// Написать функцию для сравнения двух объектов

// Необходимо написать функцию для глубокого сравнения двух заданных объектов.

console.log(compare({ a: 1, b: [1, 2, 3] }, { a: 1, b: [1, 2, 3] })); // true
console.log(compare({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2, 3] })); // false

function compare(a, b) {
  let equal = true;
  for (const [key, value] of Object.entries(a)) {
    console.log(key, value, typeof value);
    if (typeof value === "object") {
      compare(a[key], b[key]);
    } else if (value !== b[key]) {
      equal = false;
    }
  }
  return equal;
}
