export function mapSeq(
  iter: Iterable<any>,
  iterFunctions: Iterable<Function>
): IterableIterator<any> {
  const cursor = iter[Symbol.iterator]();

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      const res = cursor.next(); 
      for (const iterFn of iterFunctions) {
        res.value = iterFn(res.value);
      }
      return res;
    },
  };
}
