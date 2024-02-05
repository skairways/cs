// Реализация функции аналогичной parseInt

// Необходимо написать функцию, которая бы повторяло поведение parseInt.

function myParseInt(str: string, cs?: number) {
  let number = Number(str)
  if(cs) {
    
  }
  return number
}

console.log(myParseInt('10'));      // 10
console.log(myParseInt('-10', 2));  // -2
console.log(myParseInt('FFP', 16)); // 255
console.log(myParseInt('--20'));    // NaN

