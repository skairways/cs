export class Vector {
  #buffer;
  #capacity;
  #typedArray;
  #length;
  constructor(TypedArray, config) {
    this.#capacity = config.capacity;
    this.#typedArray = TypedArray;
    this.#buffer = new this.#typedArray(this.#capacity);
    this.#length = 0;
  }

  checkSpace() {
    if (this.#length === this.#capacity) {
      this.#capacity *= 2;
      this.expend();
    }
  }

  expend() {
    const newBuffer = new this.#typedArray(this.#capacity);
    newBuffer.set(this.#buffer);
    this.#buffer = newBuffer;
  }

  push(...args) {
    args.forEach((el) => {
      this.checkSpace();
      this.#buffer[this.#length++] = el;
    });
  }

  pop() {
    const lastElement = this.#buffer[this.#length - 1];
    this.#buffer[--this.#length] = 0;
    return lastElement;
  }

  unshift(...args) {
    args.forEach((el) => {
      this.checkSpace();
      this.#buffer.set(this.#buffer.subarray(0, -1), 1);
      this.#buffer[0] = el
      this.#length += 1
    })
  }

  shift() {
    const firstElement = this.#buffer[0];
    this.#buffer[0] = 0;
    this.#buffer.set(this.#buffer.subarray(1));
    return firstElement;
  }

  get length() {
    console.log(this.#buffer);
    return this.#length;
  }
}
