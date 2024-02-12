// Сжатие строки

// Необходимо написать функцию, которая бы принимала бы строку и "схлопывала" бы все подряд идущие повторения.

console.log(zipStr("abbaabbafffbezza")); // abafbeza

function zipStr(str: string) {
  return str.replaceAll(/\w/g, (value, key) => {
    return str[key + 1] === value ? "" : value;
  });
}
