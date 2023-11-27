import { Parser } from "./types";

export function tag(str: string): Parser<string, string> {
  return function* <Parser>(iterable) {
    let strIter = str[Symbol.iterator]();
    let sym = strIter.next().value;
    let value = "";

    for (const char of iterable) {
      if (char === sym) {
        value += char;
        sym = strIter.next().value;
      }
    }

    const token = {
      type: "TAG",
      value,
    };

    return [token, strIter];
  };
}
