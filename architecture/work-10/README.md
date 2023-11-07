# ДЗ к лекции Архитектура#10

## Реализовать базовый компонент React с поддержкой посетителей

Реализовать стандартные посетители для добавления обработчиков событий.

```js
const tpl = <my-component accept={[
 on('click', cb1),
 once('submit', cb2)
]} />
```
   
## Реализовать стандартные посетитель для компонента React, который интегрирует IntersectionObserver

```js
const tpl = <my-component accept={[
 inView({
   delay: 1_000,
   entered: onEntered,
   leaved: onLeaved
 })
]} />
```