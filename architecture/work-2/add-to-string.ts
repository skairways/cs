export function addToString(obj) {
  return Object.defineProperty(obj, "toString", {
    configurable: true,
    writable: true,
    enumerable: false,
    value() {
      switch (this.length) {
        case 0:
          return "";
        case 1:
          return this[0];
        default:
          return `${this[0]} .. ${this.at(-1)}`;
      }
    },
  });
}
