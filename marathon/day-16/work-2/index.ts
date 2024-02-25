// Валидация скобочных групп

// Необходимо написать функцию, которая бы принимала строку и возвращала true, если у каждого из символов {, [ и ( есть своя закрывающая пара и они стоят в правильной последовательности.

console.log(isValid("(hello{world} and [me])")); // true
console.log(isValid("(hello{world)} and [me])")); // false
console.log(isValid(")")); // false

function isValid(str: string) {
  const stack = [];
  const group = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (const sym of str) {
    if (group[sym]) {
      stack.push(sym);
    }

    if (Object.values(group).includes(sym)) {
      if (group[stack.pop()] !== sym) return false;
    }
  }

  return stack.length > 0 ? false : true;
}
