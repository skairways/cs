// Написать функцию throttle

// Необходимо написать функцию, которая бы принимала другую функцию и возвращала её throttle версию.

function laugh() {
  console.log("Ha-ha!");
}

const throttledLaugh = throttle(laugh, 300);

throttledLaugh();
throttledLaugh();
throttledLaugh();
throttledLaugh();
throttledLaugh();

function throttle(cb, delay) {
  let lastExecTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastExecTime >= delay) {
      cb.apply(this, args);
      lastExecTime = now;
    }
  };
}
