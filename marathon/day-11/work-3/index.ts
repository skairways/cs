// Реализовать класс LRU кеша

// Необходимо реализовать класс кеширования с алгоритмом LRU.

class LRUCache {
  protected size;
  protected cache = new Map();
  constructor(size: number) {
    this.size = size;
  }

  has(k) {
    if (this.cache.has(k)) {
      const value = this.cache.get(k);
      this.delete(k);
      this.set(k, value);
    }
    return this.cache.has(k);
  }

  get(k) {
    if (this.has(k)) {
      return this.cache.get(k);
    }
  }

  set(k, v) {
    if (this.cache.size >= this.size) {
      this.cache.delete(this.cache.keys().next().value);
    }
    return this.cache.set(k, v);
  }

  delete(k) {
    this.cache.delete(k);
  }
}

const cache = new LRUCache(3); // Размер кеша

cache.set("key1", 1);
cache.set("key2", 2);
cache.set("key3", 3);

console.log(cache.get("key1")); // 1

cache.set("key4", 4);

console.log(cache.has("key2")); // false
