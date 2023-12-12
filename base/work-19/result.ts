enum ResultState {
  Resolved,
  Rejected,
}

export class Result<T> {
  #data: T | null = null;
  #error: unknown;
  #state: ResultState;

  constructor(cb: () => T | Result<T>) {
    try {
      const data = cb();
      if (data instanceof Result) {
        data
          .then((data: T) => {
            this.#state = ResultState.Resolved;
            this.#data = data;
          })
          .catch((err) => {
            this.#state = ResultState.Rejected;
            this.#error = err;
          });
      } else {
        this.#state = ResultState.Resolved;
        this.#data = data;
      }
    } catch (error) {
      const data = cb();
      this.#state = ResultState.Rejected;
      this.#error = data;
    }
  }

  then(cb) {
    if (this.#state === ResultState.Resolved) {
      return new Result(() => cb(this.#data));
    }

    return this;
  }

  catch(cb) {
    if (this.#state === ResultState.Rejected) {
      return new Result(() => cb(this.#error));
    }

    return this;
  }
}
