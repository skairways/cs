// Поиск в массиве строк по заданной подстроке с пропуском символов

// Необходимо написать функцию, которая бы принимала массив строк и строку и возвращала бы новый массив,
// состоящий только из элементов с содержанием заданной подстроки. Алгоритм должен учитывать, что подстрока может быть найдена в строке при помощи пропуска части символов в строке (нечеткий поиск).

function find(searchedStr: string, strArr: string[]): string[] {
  return strArr.filter((str) => {
    const stack = searchedStr.split("");
    for (const sym of str) {
      if (sym === stack[0]) {
        stack.shift();
      }
      if (stack.length === 0) {
        return str;
      }
    }
  });
}

console.log(find("kbza", ["kobezzza", "bob", "kibiza", "kobea"])); // ['kobezzza', 'kibiza']
