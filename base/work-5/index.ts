import { recursiveCollapse, stackCollapse } from "./collapse";
import { isValid } from "./scope";

const obj = {
  a: {
    b: [1, 2],
    "": { c: 2 },
  },
};

/* {'a.b.0': 1, 'a.b.1': 2, 'a..c': 2} */
console.log(recursiveCollapse(obj));
// console.log(stackCollapse(obj));

// console.log(isValid("(hello{world} and [me])")); // true
// console.log(isValid("(hello{world)} {{and [me])")); // false
// console.log(isValid(")")); // false
