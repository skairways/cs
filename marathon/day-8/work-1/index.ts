// Нахождения разницы двух множеств

// Необходимо написать функцию, которая принимает два массива (элементы в массивах не повторяются) и возвращает новый массив.
// В новом массиве должны быть все элементы которые есть в первом массиве, но нет во втором.

console.log(diff([1, 2, 3, 4, 5], [3, 4, 1])); // [2, 5]

function diff(arr1, arr2) {
  const unique = [];
  const arrSet = new Set();
  arr2.forEach((el) => arrSet.add(el));
  arr1.forEach((el) => {
    if (!arrSet.has(el)) unique.push(el);
  });

  return unique;
}
