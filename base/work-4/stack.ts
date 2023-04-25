export class Stack {
  TypedArray: any;
  size: number;
  constructor(TypedArray: any, length: number) {
    this.TypedArray = new TypedArray(length);
    this.size = 0;
  }

  push(number) {
    this.TypedArray[this.size] = number;
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      throw new Error("Stack is empty");
    }
    const lastValue = this.TypedArray[this.size - 1];
    this.TypedArray[this.size - 1] = 0;
    this.size--;
    return lastValue;
  }

  get head() {
    return this.TypedArray[this.size - 1];
  }
}
