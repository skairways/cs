console.log(includes("hello bob!", "bob")); // true
console.log(includes("abba", "aba")); // false

function includes(str, padStr) {
  let iterator = padStr[Symbol.iterator]();
  let chunk = iterator.next();
  for (const sym of str) {
    if (sym === chunk.value) {
      chunk = iterator.next();
      if (chunk.done) return true;
    } else {
      iterator = padStr[Symbol.iterator]();
      chunk = iterator.next();
    }
  }
  return false;
}
