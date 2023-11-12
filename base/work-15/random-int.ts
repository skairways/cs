export function random<T>(min: number, max: number): IterableIterator<number> {
  return {
    [Symbol.iterator]() {
      return this;
    },

    next: () => {
      return {
        done: false,
        value: Math.ceil(Math.random() * max) + min,
      };
    },
  };
}
