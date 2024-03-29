# ДЗ к лекции База#25

## Написать библиотеку worker-dom, которая позволяет из кода потока работать с DOM

Библиотека должна посылать сообщения в главный поток используя специальный протокол.

```js
requireScripts('./worker-dom.js');

document.addEventListener('click', (e) => {
  console.log(e.clientX, e.clientY);
});

document.querySelector('div').length.then(console.log);
```

## Необходимо используя SharedArrayBuffer реализовать структуру данных RWLock

RWLock должен предоставить синхронизированный доступ к защищаемым данным для разных потоков.
И должен передаваться в postMessage учетом разделения внутреннего счетчика.

```js
const lock = new RWLock({value: 1});

{
  const {proxy, free} = lock.get();

  console.log(proxy.value); // 1

  try {
    proxy.value = 2;        // Exception
  } catch {}

  try {
    lock.getMut();          // Exception - уже есть читающие
  } catch {}

  free();
}

{
  const {proxy, free} = lock.getMut();

  proxy.value += 2;

  console.log(proxy.value); // 3

  try {
    lock.get();             // Exception - уже есть пишущий
  } catch {}
}
```