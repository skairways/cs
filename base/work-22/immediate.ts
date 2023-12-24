export function setImmediate(value: unknown) {
  let id;
  new Promise((res) => {
    id = setTimeout(() => {
      res(console.log(value));
    });
  });

  return id;
}

export function clearImmediate(id) {
  clearTimeout(id);
}
