// Реализовать функцию waterfall для callback функций

// Необходимо создать функцию для композиции асинхронного кода на callback функциях, которая работает как показано на примере.

waterfall(
  [
    (cb) => {
      cb(null, "one", "two");
    },

    (arg1, arg2, cb) => {
      console.log(arg1); // one
      console.log(arg2); // two
      cb(null, "three");
    },

    (arg1, cb) => {
      console.log(arg1); // three
      cb(null, "done");
    },
  ],
  (err, result) => {
    console.log(result); // done
  }
);

function waterfall(arr, cb) {
  const iters = arr[Symbol.iterator]();
  for (const iter of iters) {
    
  }
}

// waterfall(new Set([
//   (cb) => {
//     cb('ha-ha!');
//   },

//   (arg1, cb) => {
//     cb(null, 'done');
//   }
// ]), (err, result) => {
//   console.log(err);    // ha-ha!
//   console.log(result); // undefined
// });
