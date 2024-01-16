export function on(
  emitter: any,
  event: string
): AsyncIterableIterator<unknown> {
  const handlers: Set<Function> = new Set();
  const queue: any[] = [];

  let done = false;
  console.log('on ishladi')

  const handler = (e: any) => {
    if (handlers.size === 0) {
      queue.push(e);
    } else {
      handlers.forEach((handler) => handler(e));
      handlers.clear();
    }
  };

  emitter.addEventListener(event, handler);

  return {
    [Symbol.asyncIterator]() {
      return this;
    },

    return(value) {
      done = true;
      emitter.removeEventListener(event, handler);
      return Promise.resolve({ done, value });
    },

    next() {
      return new Promise((resolve) => {
        if (done) {
          resolve({ done, value: undefined });
          return;
        }

        if (queue.length > 0) {
          resolve({ done: false, value: queue.shift() });
        } else {
          handlers.add((value: any) => {
            resolve({ done: false, value });
          });
        }
      });
    },
  };
}
