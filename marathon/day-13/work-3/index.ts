// Найти два элемента массива сумма которых дает заданное число

// Необходимо написать функцию, которая бы принимала массив чисел и число и возвращала бы индексы двух элементов массива сумма которых даёт заданное число.

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]

function twoSum(arr, comparator) {
  let found;
  arr.forEach((num, numIdx) => {
    arr.forEach((innerNum, idx) => {
      if (numIdx !== idx && num + innerNum === comparator) {
        found = [idx, numIdx];
        return;
      }
    });
  });
  return found ? found : -1;
}
