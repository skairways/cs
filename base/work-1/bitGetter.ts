export function get(idx: number, pos: number): number {
  return (this.bits[idx] & (1 << pos)) >> pos;
}

function createBitGetter(bits: Uint8Array) {
  this.bits = bits;
  this.get = get.bind(this);
}

export default createBitGetter;
