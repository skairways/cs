import { Result } from "./result";

export function exec<R>(
  generator: () => Generator<unknown | Result<unknown>, R, unknown>
): Result<R> {
  const iter = generator();
  return process();

  function process(data?): Result<R> {
    const chunk = iter.next(data);

    if (chunk.done) {
      return new Result(() => chunk.value);
    }

    const value = new Result(() => chunk.value);

    return value.then(process).catch((err) => {
      iter.throw(err)
      return process()
    });
  }
}
