// export function indexedWrapper(map: Map<unknown, unknown>) {
//   // console.log(map);
//   Object.defineProperty(map, Number(), {
//     get() {
//       console.log('la',this)
//       // console.log(new Array(...map.values())[this]);
//       return map.values();
//     },
//   });
//   return map;
// }

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
