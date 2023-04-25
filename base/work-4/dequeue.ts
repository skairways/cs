import { LinkedList } from "../work-3/linkedList";

export class Dequeue extends LinkedList {
  constructor() {
    super();
  }

  push(el) {
    this.add(el);
  }

  pop() {
    if(this.list.length === 0) {
      throw new Error("Empty queue");
    }
    const lastValue = this.last.value;
    this.list = this.list.slice(0, -1);
    this.refreshData();
    return lastValue;
  }

  unshift(el) {
    this.list = [{ value: el }, ...this.list];
    this.refreshData();
  }

  shift() {
    if(this.list.length === 0) {
      throw new Error("Empty queue");
    }
    const firstValue = this.first.value;
    this.list = this.list.slice(1);
    this.refreshData();
    return firstValue;
  }
}
