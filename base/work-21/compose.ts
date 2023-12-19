export function compose(...fns) {
  return fns.reduceRight((acc, fn) => {
    return function (value) {
      return fn.call(this, acc.call(this, value))
    };
  });
}
