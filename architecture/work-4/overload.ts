export function overload(fns: Array<Function>): (...args) => void {
  const map = {};

  for (const fn of fns) {
    map[fn.length] = fn;
  }

  return function () {
    const current = map[arguments.length];
    if (current) {
      return current.apply(this, arguments);
    }
  };
}
