import { Parser } from "./types";

export function seq(
  ...parsers: Parser<string, string>[]
): Parser<string, string> {
  return function* <Parser>(source, prev) {
    let iter = source[Symbol.iterator]();

    let value = [];
    for (const parser of parsers) {
      const parsing = parser(iter, prev);
      const chunk = parsing.next();
      value.push(chunk.value[0]);
      iter = chunk.value[1];
    }

    const token = {
      type: "SEQ",
      value,
    };

    return [token, iter];
  };
}
