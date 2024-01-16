export async function forEach(iterable, cb) {
  for await (const iterator of iterable) {
    cb()
  }
}