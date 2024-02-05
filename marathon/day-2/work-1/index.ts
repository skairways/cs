var val = Promise.resolve(1);

var arr = [1, 2, 3];

for (var i = 0; i < arr.length; ++i) {
  val = val.then((val) => val + arr[i]);
}

val.then(console.log); // ?

// будет NaN, за счет префикс инкремента и области видимости var