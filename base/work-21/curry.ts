curry._ = Symbol("hole");

export function curry(fn) {
  function curried(...args) {
    if (fn.length <= args.filter((arg) => arg !== curry._).length) {
      return fn.apply(this, args.slice(0, fn.length));
    }

    return function (...args2) {
      const mergedArgs = args.map((arg) =>
        arg === curry._ ? args2.shift() : arg
      );

      return curried.apply(this, mergedArgs.concat(args2));
    };
  }

  Object.defineProperty(curried, "length", { value: fn.length });

  return curried;
}
