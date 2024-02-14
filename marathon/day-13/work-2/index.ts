// Пересечение диапазонов

// Необходимо написать функцию, которая бы принимала бы две строки с числовыми диапазонами и возвращала бы новую строку, где отображены пересечения этих интервалов.

console.log(intersectRanges("1-2; 4-6; 9-11", "1-5; 10-14; 15")); // 1-2; 4-5; 10-11

function intersectRanges(str1, str2) {
  const arr1 = transform(str1);
  const arr2 = transform(str2).flat();
  return arr1
    .map((subArr) => {
      const range = subArr.filter((el) => arr2.includes(el));
      if (range.length <= 1) return range.map(String);
      return `${range[0]}-${range[range.length - 1]}`;
    })
    .join("; ");
}

function transform(str: string) {
  return str.split("; ").map((str) => {
    const subArr = str.split("-").map(Number);
    if (subArr.length <= 1) {
      return subArr;
    }
    const newArr = [];
    for (let i = subArr[0]; i <= subArr[1]; i++) {
      newArr.push(i);
    }
    return newArr;
  });
}
