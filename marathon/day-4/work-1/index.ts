// Что и в каком порядке выведется в консоль? И почему?

console.log('foo'); // sync

setTimeout(() => {
  console.log('bar'); // macro
}, 0);

queueMicrotask(() => {
  console.log('baz');  // micro
  Promise.resolve().then().then(() => console.log('ban')); // micro for next cb
});

new Promise((resolve) => {
  console.log('bla');  // sync on cb
  resolve('baf'); // micro for next cb
}).then(console.log); // micro

console.log('bak'); // sync

// foo bla bak baz baf ban bar