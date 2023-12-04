import { Parser } from "./types";

export function seq(
  ...parsers: Parser<string, string>[]
): Parser<string, string> {
  return function* (source, prev) {
    let iter = source;

    let value = [];
    for (const parser of parsers) {
      const parsing = parser(iter, prev);
      const chunk = parsing.next();
      value.push(chunk.value[0]);
      iter = chunk.value[1];
    }

    const token = {
      type: "SEQ",
      value: value.reduce((sum, { value }) => (sum += value), ""),
    };

    return [token, iter];
  };
}
