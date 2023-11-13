export function zip(...args: Iterable<any>[]): Iterable<any>[] {
  const result = [];
  let innerIter
  for (let i = 0; i < args.length; i++) {
    innerIter = args[i][Symbol.iterator]();
    
    result.push(innerIter.next().value);
    
  }
  console.log(result);
  return [result];
}
