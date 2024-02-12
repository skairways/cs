// Реализовать функция бинарного поиска с callback

// Необходимо написать функцию, которая бы принимала отсортированный массив и функцию-компаратор и возвращала бы индекс найденного элемента (если компаратор вернул 0).
// Для поиска должен использоваться алгоритм бинарного поиска.

console.log(bisect([1, 2, 3, 4, 5, 6, 7], (val) => 4 - val)); // 3
console.log(bisect([1, 2, 3, 4, 5, 6, 7], (val) => 234 - val)); // -1

function bisect(arr, cb) {
  if (arr.length <= 1) return -1;
  const bi = Math.floor(arr.length / 2);

  if (cb(arr[bi]) < 0) {
    return bisect(arr.slice(0, bi), cb);
  } else if (cb(arr[bi]) > 0) {
    return bisect(arr.slice(bi, arr.length), cb);
  } else {
    return bi;
  }
}
