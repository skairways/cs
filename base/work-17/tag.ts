import { Parser } from "./types";

export function tag(str: string): Parser<string, string> {
  return function* <Parser>(iterable) {
    let strIter = str[Symbol.iterator]();
    let iterableStr = iterable[Symbol.iterator]()
    let sym = strIter.next().value;
    let value = "";

    for (const char of iterableStr) {
      if (char === sym) {
        const chunk = strIter.next();
        value += char;
        sym = chunk.value;
        if (chunk.done) break;
      }
    }

    const token = {
      type: "TAG",
      value,
    };
    // console.log('qwer',[token, iterableStr])

    return [token, iterableStr];
  };
}
