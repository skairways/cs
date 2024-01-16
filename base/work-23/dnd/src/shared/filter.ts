export function filter<T>(
  asyncIterable: AsyncIterable<T>,
  cb: (iter: any) => boolean
): AsyncIterableIterator<T> {
  const cursor = asyncIterable[Symbol.asyncIterator]();
  return {
    [Symbol.asyncIterator]() {
      return this;
    },

    async next() {
      let cursorObj = await cursor.next();

      while (!cb(cursorObj)) {
        console.log(cursorObj);
        cursorObj = await cursor.next();
      }

      return { done: true, value: undefined };
    },
  };
}
