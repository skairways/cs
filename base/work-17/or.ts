import { Parser } from "./types";

export function or(...parsers: Parser[]): Parser<string, string> {
  return function* (source) {
    let token;
    const iterSource = source;

    for (const parser of parsers) {
      const parsing = parser(iterSource);
      const chunk = parsing.next();
      if (chunk.value[0].value) {
        token = chunk.value[0];
        break;
      }
    }

    return [token, iterSource];
  };
}
