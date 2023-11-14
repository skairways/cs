export function zip(...args: Iterable<any>[]): IterableIterator<any>[] {
  const iters = args.map((i) => i[Symbol.iterator]());

  return <any>{
    [Symbol.iterator]() {
      return this;
    },

    next() {
      const res = new Array(args.length);

      for (const [i, iter] of iters.entries()) {
        const chunk = iter.next();

        if (chunk.done) {
          return {
            done: true,
            value: undefined,
          };
        }

        res[i] = chunk.value
      }

      return {
        done: false,
        value: res,
      };
    },
  };
}
