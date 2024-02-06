// Реализовать функцию setImmediate

// Необходимо функцию, которая бы предоставляла API схожее с setTimeout, но создавала бы микротаску.

setTimeout(() => {
  console.log(3);
}, 0);

setImmediate(() => {
  console.log(1);
});

const timer = setImmediate(() => {
  console.log(2);
});

clearImmediate(timer);

function setImmediate(cb: () => void) {
  let abort = false;
  Promise.resolve().then(() => {
    if (!abort) cb();
  });
  // самому смешно смотреть на этот костыль, но вроде креативненько
  return () => {
    abort = true;
  };
}

function clearImmediate(timer) {
  timer();
}
