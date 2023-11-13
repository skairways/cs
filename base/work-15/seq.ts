export function seq(...args: Iterable<any>[]): IterableIterator<any> {
  let cursor = 0;
  let innerIter = args[cursor][Symbol.iterator]();

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      let iter = innerIter.next();
      if (iter.done) {
        cursor++;
        if (args[cursor]) {
          innerIter = args[cursor][Symbol.iterator]();
          iter = innerIter.next();
        }
      }
      return { value: iter.value, done: cursor == args.length };
    },
  };
}
