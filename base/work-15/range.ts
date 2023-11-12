type RangeInput = number | string;

export class Range implements IterableIterator<RangeInput> {
  private start: number;
  private finish: number;
  private rangeType: RangeInput;
  private cursor: number;
  private limit: number;
  private increment: number = 1;
  private direction: boolean;

  constructor(start: RangeInput, finish: RangeInput) {
    if (typeof start === "string" && typeof finish === "string") {
      this.start = start.charCodeAt(0);
      this.finish = finish.charCodeAt(0);
      this.rangeType = "string";
    }

    if (typeof start === "number" && typeof finish === "number") {
      this.start = start;
      this.finish = finish;
      this.rangeType = "number";
    }

    this.cursor = this.start;
    this.limit = this.finish;
    this.direction = this.start < this.finish ? true : false;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    const response = {
      done: this.findDir(this.cursor, this.limit),
      value:
        this.rangeType === "string"
          ? String.fromCharCode(this.cursor)
          : this.cursor,
    };
    this.cursor += this.increment;
    return response;
  }

  findDir(start, finish) {
    return this.direction ? start > finish : start < finish;
  }

  reverse() {
    this.cursor = this.finish;
    this.limit = this.start;
    this.increment = -1;
    this.direction = !this.direction;

    return this;
  }
}
