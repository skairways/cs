// Параллельные асинхронные запросы

// Необходимо написать функцию, которая бы принимала Iterable функций и возвращала результат аналогичный Promise.allSettled.
// Каждая из переданных функций может вернуть Promise. Одновременно может быть запущено не более заданного количества Promise, но при этом максимально возможное.

allSettledLimit(
  [
    () => fetch("//some-data-1"),
    () => fetch("//some-data-2"),
    () => fetch("//some-data-3"),
    () => fetch("//some-data-4"),
  ],
  2
).then(console.log);

function allSettledLimit<T>(iters: Iterable<() => Promise<T>>, limit) {
  return new Promise((resolve, reject) => {
    const promises = [...iters];
    const results = new Array(limit);

    function processPromise(idx) {
      const currentPromise = promises[idx]();
      currentPromise
        .then((value) => {
          return results.push({
            statue: "fulfilled",
            value,
          });
        })
        .catch((reason) => {
          return results.push({
            statue: "rejected",
            reason,
          });
        })
        .finally(() => {
          processPromise(idx);
        });
    }

    promises.forEach((_, idx) => processPromise(idx));
  });
}
