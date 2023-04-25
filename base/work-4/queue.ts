import { LinkedList } from "../work-3/linkedList";

export class Queue extends LinkedList {
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
    const firstValue = this.first.value;
    this.list = this.list.slice(1);
    this.refreshData()
    return firstValue;
  }

  get head() {
    return this.first.value;
  }
}
