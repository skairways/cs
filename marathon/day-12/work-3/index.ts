// Написать итератор для дерева

// Необходимо написать итератор для заданной структуры дерева.

const i = iterate({
  value: 1,
  children: [{value: 2}, {value: 3, children: [{value: 4}]}]
});

console.log(i.next()); // {value: 1, done: false}
console.log(i.next()); // {value: 2, done: false}
console.log(i.next()); // {value: 3, done: false}
console.log(i.next()); // {value: 4, done: false}
console.log(i.next()); // {value: undefined, done: true}