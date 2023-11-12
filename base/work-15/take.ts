export function take<T>(
  iterable: Iterable<T>,
  elNum: number
): IterableIterator<T> {
  let cursor = iterable[Symbol.iterator]()
  let limit = 0

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if(limit >= elNum) {
        return {
          done: true,
          value: undefined,
        };
      }

      limit++
      return cursor.next()
    },
  };
}
