// Сжатие строки

// Необходимо написать функцию, которая бы принимала бы строку и "схлопывала" бы все подряд идущие повторения.

console.log(zipStr("abbaabbafffbezza")); // abafbeza

function zipStr(str: string) {
  while (true) {
    const zip = str.replaceAll(/(.+)\1+/g, "$1")
    if(zip === str) return zip
    str = zip
  }
}
