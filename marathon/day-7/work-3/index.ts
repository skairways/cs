// Реализовать функцию преобразования CamelCase в dash-style

// Необходимо создать функцию, которая бы принимала строку в CamelCase и возвращала бы её вариант в dash-style.

console.log(dasherize("createDocumentFragment")); // 'create-document-fragment'
console.log(dasherize("SuperMAN")); // 'super-man'
console.log(dasherize("VirtualDOMFragment")); // 'virtual-dom-fragment'

function dasherize(str: string): string {
  let res = [];
  str.split("").forEach((sym, i) => {
    if (isCapitalSym(sym)) {
      res.push(sym.toLocaleLowerCase());
      const sibling = str[i + 1];
      const nextSibling = str[i + 2];
      if (
        sibling &&
        nextSibling &&
        isCapitalSym(sibling) &&
        !isCapitalSym(nextSibling)
      )
        res.push("-");
    } else {
      res.push(sym);
      if (!isCapitalSym(str[i]) && isCapitalSym(str[i + 1])) res.push("-");
    }
  });

  return res.join("");
}

function isCapitalSym(sym: string): boolean {
  if (!sym) return false;
  return 65 <= sym.charCodeAt(0) && sym.charCodeAt(0) <= 96;
}
