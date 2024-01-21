export class MRUCache {
  protected store = new Map();
  protected limit = 10;
  constructor(limit: number) {
    this.limit = limit;
  }

  has(key: string) {
    if (this.store.has(key)) {
      const value = this.store.get(key);
      this.store.delete(key);
      this.store.set(key, value);
      return true;
    }
  }

  get(key: string) {
    if (this.has(key)) {
      return this.store.get(key);
    }
  }

  set(key: string, value: unknown) {
    if (this.store.size >= this.limit) {
      this.store.delete(Array.from(this.store.keys()).pop());
    }
    this.store.set(key, value);
  }

  delete(key: string) {
    if (this.store.has(key)) {
      this.store.delete(key);
    }
  }
}
