import { Parser } from "./types";

export function take(rule, opts: any = {}): Parser<string, string> {
  return function* (source, prev) {

    const { min = 1, max = Infinity } = opts;
    let value = "";

    if (rule instanceof RegExp) {
      for (const iter of source) {
        if (rule.test(iter)) {
          value += iter;
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

    return [token, source];
  };
}
