type RangeInput = number | string;

export class Range implements IterableIterator<RangeInput> {
  private start: number;
  private finish: number;
  private rangeType: RangeInput;
  private cursor: number;
  private limit: number;
  private reversed: boolean;

  constructor(start: RangeInput, finish: RangeInput) {
    this.start = this.getNumber(start);
    this.finish = this.getNumber(finish);

    this.cursor = this.start;
    this.limit = this.finish;
    this.reversed = this.start < this.finish ? true : false;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    const response = {
      done: this.findDir(this.cursor, this.limit),
      value: this.getT(this.reversed ? this.cursor++ : this.cursor--),
    };

    return response;
  }

  reverse() {
    this.cursor = this.finish;
    this.limit = this.start;
    this.reversed = !this.reversed;

    return this;
  }

  protected getNumber(value: RangeInput): number {
    if (typeof value === "string") {
      this.rangeType = "string";
      return value.charCodeAt(0) ?? NaN;
    }

    this.rangeType = "number";
    return value;
  }

  protected getT(value: number) {
    if (this.rangeType === "string") {
      return String.fromCharCode(value);
    }

    return value;
  }

  protected findDir(start, finish) {
    return this.reversed ? start > finish : start < finish;
  }
}
