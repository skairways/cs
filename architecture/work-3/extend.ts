export function extend(constr, extender) {
  Object.setPrototypeOf(extender, Object.getPrototypeOf(constr.prototype));
  Object.defineProperties(
    constr.prototype,
    Object.getOwnPropertyDescriptors(extender)
  );
}
