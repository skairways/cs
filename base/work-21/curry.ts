const hole = Symbol("hole");

export function curry(fn) {
  function curried(...args) {
    const filteredArgs = args.filter((arg) => arg !== hole);

    if (fn.length <= filteredArgs.length) {
      return fn.apply(this, args.slice(0, fn.length));
    }

    return function (...args2) {
      const mergedArgs = args.map((arg) =>
        arg === hole ? args2.shift() : arg
      );

      return curried.apply(this, mergedArgs.concat(args2));
    };
  }

  Object.defineProperty(curried, "length", { value: fn.length });

  return curried;
}

curry._ = hole;
