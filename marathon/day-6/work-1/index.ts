// Написать функцию debounce

// Необходимо написать функцию, которая бы принимала другую функцию и возвращала её debounce версию.

function laugh() {
  console.log("Ha-ha!");
}

const debouncedLaugh = debounce(laugh, 300);

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

debouncedLaugh();
debouncedLaugh();
debouncedLaugh();
debouncedLaugh();
debouncedLaugh();
