// {a: {b: 42, c: 2, e: 7}, j: 2}

import { mixin } from "./mixin";

console.log(mixin({ a: { b: 1, c: 2 } }, { a: { b: 42, e: 7 } }, { j: 2 }));
