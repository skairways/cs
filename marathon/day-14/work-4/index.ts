console.log(diff("bob", "rob")); // 1 (одна замена)
console.log(diff("австрия", "австралия")); // 2 (два удаления)

function diff(a: string, b: string) {
  let diffCount = 0;
  let fistIter = a[Symbol.iterator](),
    secondIter = b[Symbol.iterator]();
  let longestIterator = a.length > b.length ? fistIter : secondIter;
  let shortestIterator = a.length < b.length ? fistIter : secondIter;

  for (const sym of shortestIterator) {
    let comp = longestIterator.next();
    console.log(sym, comp.value);
    
    while (sym !== comp.value && comp.done === false) {
      diffCount++;
      comp = longestIterator.next();
    }
  }

  return diffCount
}
