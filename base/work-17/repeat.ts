import { Parser } from "./types";

export function repeat(parser: Parser): Parser<string, string> {
  return function* <Parser>(source, prev) {
    let iterSource = prev ? prev : source[Symbol.iterator]();
    let token;

    const parsing = parser(iterSource);
    const chunk = parsing.next();
    token = chunk.value[0];
    iterSource = chunk.value[1];


    yield iterSource;

    return [token, iterSource];
  };
}
