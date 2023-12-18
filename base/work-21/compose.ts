export function compose(...args) {
  function composed(input) {
    return args.reverse().reduce((res, func) => func(res ?? input), undefined);
  }

  return composed;
}
