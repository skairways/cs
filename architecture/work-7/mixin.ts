export function mixin(...args) {
  const res = {};
  for (const obj of args) {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value !== "object") {
        res[key] = value;
      } else {
        res[key] = { ...res[key], ...mixin(value) };
      }
    });
  }
  return res;
}
