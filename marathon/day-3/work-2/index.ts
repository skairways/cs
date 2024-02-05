// Реализовать функцию setImmediate

// Необходимо функцию, которая бы предоставляла API схожее с setTimeout, но создавала бы микротаску.

setTimeout(() => {
  console.log(3);
}, 0);

// setImmediate(() => {
//   console.log(1);
// });

const timer = setImmediate(() => {
  console.log(2);
});

clearImmediate(timer);


function setImmediate(cb: () => void) {
  return new Promise((resolve, reject) => {
    resolve(cb);
  }).then().finally(() => {
    console.log("finally");
  });
}

function clearImmediate(timer: Promise<any>) {
  timer.then((v: any) => console.log(v));
}
