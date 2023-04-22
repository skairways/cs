import { get } from "./bitGetter";

function set(idx, pos, value) {
  if (value) {
    this.bits[idx] = this.bits[idx] | (1 << pos);
  } else {
    this.bits[idx] = this.bits[idx] & ~(1 << pos);
  }
}

function createBitAccessor(bits: Uint8Array) {
  this.bits = bits;
  this.get = get.bind(this);
  this.set = set.bind(this);
}

export default createBitAccessor;
