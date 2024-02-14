export function indexedWrapper(map: Map<unknown, unknown>) {
  return new Proxy(map, {
    get(target, property, receiver) {
      let value = Reflect.get(target, property, receiver);

      if (typeof value === "function") {
        return value.bind(target);
      }

      if (typeof Number(property) === "number") {
        return [...target.values()][property];
      }
    },
  });
}
