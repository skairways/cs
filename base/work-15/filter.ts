export function filter<T>(iterable: Iterable<T>, cb): IterableIterator<T> {
  const cursor = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      let cursorObj = cursor.next();
      while (!cb(cursorObj.value)) {
        cursorObj = cursor.next();
      }

      return cursorObj;
    },
  };
}
