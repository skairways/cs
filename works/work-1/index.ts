import createBitGetter from "./bitGetter";
import createBitAccessor from "./bitAccessor";

// TODO: move to tests
const bitGetter = new createBitGetter(new Uint8Array([0b1110, 0b1101]));
// Второй параметр это порядок бита "справа-налево"
// console.log(bitGetter.get(0, 1)); // 1
// console.log(bitGetter.get(1, 1)); // 0

const bitAccessor = new createBitAccessor(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
// bitAccessor.set(0, 1, 0); //
// console.log(bitAccessor.get(0, 1));    // 0
