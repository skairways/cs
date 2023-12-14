enum ResultState {
  Fullfilled,
  Rejected,
}

export class Result<T> {
  #data: T | null = null;
  #state: ResultState;
  #error: unknown;

  constructor(cb?) {
    try {
      const data = cb();
      if (data instanceof Result) {
      } else {
        this.#state = ResultState.Fullfilled;
        this.#data = data;
      }
    } catch (error) {
      if (error instanceof Result) {
      } else {
        this.#state = ResultState.Rejected;
        this.#error = error;
      }
    }
  }

  then(cb) {
    if (this.#state === ResultState.Fullfilled) {
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

  flatMap(cb) {
    const data = cb();
    if (data instanceof Result) return data;
  }

  map(cb) {
    return new Result(() => cb(this.#data));
  }

  static Error(input) {
    const container = new Result(() => {
      throw input;
    });

    return container;
  }
}

