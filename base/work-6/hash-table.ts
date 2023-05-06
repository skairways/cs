export class HashMap {
  buffer;
  size;
  constructor(size) {
    this.size = size;
    this.buffer = new Array(this.size);
  }

  set(key, value) {
    const hash = this.hash(key);
    if (this.buffer[hash] === undefined) {
      this.buffer[hash] = {};
    }
    this.buffer[hash][this.keyToStr(key)] = value;
  }

  get(key) {
    const hash = this.hash(key);
    return this.buffer[hash][this.keyToStr(key)];
  }

  has(key) {
    const hash = this.hash(key);
    return this.buffer[hash][this.keyToStr(key)] !== undefined;
  }

  delete(key) {
    const hash = this.hash(key);
    const deletedElement = this.buffer[hash][this.keyToStr(key)]
    this.buffer[hash][this.keyToStr(key)] = undefined
    return deletedElement
  }

  hash(key) {
    const strKey = this.keyToStr(key)
    const charSum = strKey.split("").reduce((sum, sym) => {
      return (sum += sym.charCodeAt(0));
    }, 0);
    const hash = charSum % this.size;

    return hash;
  }

  keyToStr(key) {
    return JSON.stringify(key)
  }
}
