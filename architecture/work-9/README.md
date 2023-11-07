# ДЗ к лекции Архитектура#9

## Реализовать класс EventEmitter с добавлением перегрузок для асинхронных итераторов

```js
const ee = new EventEmitter();

ee.once('someEvent', (e) => {
 console.log(e);
});

(async () => {
 for await (const e of ee.on('myEvent')) {
   console.log(e)
 }
})();

ee.emit('someEvent', 42);
ee.emit('myEvent', 12);

ee.off('myEvent');
ee.off('someEvent');
```

## Расширить класс EventEmitter для возможности создания иерархии и делегирования событий

```js
const parentEE = new EventEmitter();
const ee = new EventEmitter(parentEE);

parentEE.on('someEvent', (e) => {
 console.log(e.data);

 // Ссылки на объект, на котором изначально произошло событие
 console.log(e.target);
});

ee.emit('someEvent', 42);
```

## Расширить класс EventEmitter для возможности отмены дальнейшего всплытия события

```js
const parentEE = new EventEmitter();
const ee = new EventEmitter(parentEE);

parentEE.on('someEvent', (e) => {
 console.log(e.data);
});

ee.on('someEvent', (e) => {
 e.stopPropagation();
 console.log(e.data);
});

ee.emit('someEvent', 42);
```
