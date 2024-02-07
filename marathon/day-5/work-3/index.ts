// Выборочная сортировка массива

// Необходимо написать функцию sort, которая бы сортировала элементы со значением кратным двум.

function sort(arr) {
  const positions = [];
  const values = [];

  arr.forEach((el, i) => {
    if (el % 2 === 0) {
      positions.push(i);
      values.push(el);
    }
  });

  values.sort((a, b) => a - b);

  values.forEach((el, i) => {
    arr[positions[i]] = el
  })

  return arr
}

console.log(sort([7, 1, 4, 2, 9, 8])); // [7, 1, 2, 4, 9, 8]
console.log(sort([6, 7, 4, 2, 1, 9])); // [7, 1, 2, 4, 9, 8]
