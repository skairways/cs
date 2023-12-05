import { Parser } from "./types";

export function take(rule, opts: any = {}): Parser<string, string> {
  return function*  <Parser>(source) {
    let iterSource = source[Symbol.iterator]();
    const { min = 1, max = Infinity } = opts;
    let value = "";

    let buffer = [];

    if (rule instanceof RegExp) {
      for (const iter of iterSource) {
        if (rule.test(iter)) {
          value += iter;
        } else {
          buffer.push(iter);
        }
        if (value.length >= max) {
          break;
        }
      }
    }

    const token = {
      type: "TAKE",
      value,
    };

    return [token, buffer.length ? buffer : iterSource];
  };
}
