export function readonly(obj) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);

      if (value == null || typeof value !== "object") {
        return value;
      }
      console.log(value);

      if (typeof value === "function") {
        return value.bind(receiver);
      }

      return readonly(value);
    },

    set() {
      return false;
    },

    deleteProperty() {
      return false;
    },

    defineProperty() {
      return false;
    },

    setPrototypeOf() {
      return false;
    },

    getOwnPropertyDescriptor(target, property) {
      const descriptor = Reflect.getOwnPropertyDescriptor(target, property);

      if (!descriptor.configurable) {
        return descriptor.configurable;
      }

      return {
        ...descriptor ,
        writable: false,
      };
    },
  });
}
