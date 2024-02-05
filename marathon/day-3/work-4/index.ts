// Реализовать zip для синхронных Iterable объектов

// Общее количество кортежей берется по минимальному значению. Функция должна возвращать IterableIterator.

console.log(...zip(new Set([1, 2]), ["a", "b", "z"], "...")); // [1, 'a', '.'] [2, 'b', '.']

function zip(...arr: Iterable<any>[]): IterableIterator<unknown> {
  const iters = arr.map((item) => item[Symbol.iterator]());

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      const item = [];
      for (const iter of iters) {
        const chunk = iter.next();
        if (chunk.done) {
          return {
            done: true,
            value: undefined,
          };
        }
        item.push(chunk.value);
      }

      return {
        done: false,
        value: item,
      };
    },
  };
}

