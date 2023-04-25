interface List {
  value: any;
  prev?: List;
  next?: List;
}

export class LinkedList {
  first: List | undefined;
  last: List | undefined;
  list: List[];
  constructor() {
    this.init();
  }

  init() {
    this.list = [];
  }

  add(el: any) {
    this.list.push({
      prev: this.list[this.list.length - 1],
      value: el,
      next: this.list[0],
    });
    this.refreshData();
  }

  refreshData() {
    if (this.list.length > 0) {
      this.first = this.list[0];
    }
    if (this.list.length > 1) {
      this.last = this.list[this.list.length - 1];
    }
    if (this.first) {
      this.first.prev = this.last;
      this.first.next =
        this.list[this.list.findIndex((el) => el === this.first) + 1];
    }
    if (this.last) {
      this.last.prev =
        this.list[this.list.findIndex((el) => el === this.last) - 1];
      this.last.next = this.first;
    }
    if(this.list.length === 0) {
      this.first = undefined;
      this.last = undefined;
    }
  }

  *[Symbol.iterator]() {
    for (let list of this.list) {
      yield list;
    }
  }
}
