export function allLimit(iterable, limit: number) {
  return new Promise((resolve, reject) => {
    const promises = [...iterable];
    const result = new Array(promises.length);
    const iter = promises.entries();

    let pending = promises.length;

    for (let i = 0; i < limit; i++) {
      next()
    }

    function next() {
      if (pending === 0) resolve(result);

      const chunk = iter.next();

      if (chunk.done) return;

      const [i, fn] = chunk.value;

      Promise.resolve(
        fn.then((value) => {
          result[i] = value;
          pending--;
          next();
        }, reject)
      );
    }
  });
}
