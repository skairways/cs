// Написать асинхронный семафор

// Необходимо написать функцию, которая бы создавала "асинхронный семафор" на основе переданной функции и набора флагов,
// как это показано в примере ниже.

const semaphore = createsAsyncSemaphore(
  () => {
    console.log("Boom!");
  },
  "foo",
  "bar"
);

semaphore("foo");
semaphore("bar"); // 'Boom!'

// Эта функция не будет выполняться
// semaphore();

function createsAsyncSemaphore(callback, ...flags) {
  const flagsMap = new Map();

  // Функция семафора
  return function (flag) {
    if (!flag) return;

    if (flags.includes(flag)) {
      flagsMap.set(flag, true);
      const allFlagsActivated = flags.every((flag) => flagsMap.get(flag));
      if (allFlagsActivated) {
        callback();
        flags.forEach((flag) => flagsMap.set(flag, false));
      }
    }
  };
}
