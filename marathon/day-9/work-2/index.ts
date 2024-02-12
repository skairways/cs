// Найти строку для которой нет анаграммы

// Необходимо написать функцию, которая бы принимала массив строк и возвращала бы новый массив.
// Элементами этого массива должны быть строки, для которых не существует анаграмм среди элементов первого массива.

console.log(getUniqueStrs(["atoe", "otea", "ben", "enb", "baz", "foo"])); // ['baz', 'foo']

function getUniqueStrs(arr: string[]): string[] {
  const map = new Map();
  arr.forEach((str) => {
    const word = str
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");

    if (map.has(word)) {
      map.delete(word);
    } else {
      map.set(word, str);
    }
  });

  return Array.from(map.values());
}
