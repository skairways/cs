// Выборочная сортировка массива

// Необходимо написать функцию sort, которая бы сортировала элементы со значением кратным двум.

function sort(arr: number[]): number[] {
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 0) return a - b;
  })
}

console.log(sort([7, 1, 4, 2, 9, 8])); // [7, 1, 2, 4, 9, 8]