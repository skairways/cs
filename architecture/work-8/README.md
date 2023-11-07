# ДЗ к лекции Архитектура#8

## Реализовать декораторы ttl (время жизни записи в кеше) и persistent (сохранять ключи в офлайн хранилище) для классов кеширования из прошлых ДЗ

```js
const lruCache = ttl(new LRUCache(10), 1000);

// Через 1000 мс данные из кеша удаляться
lruCache.set(ket, value);
```

## Реализовать поддержку дефолтных реализаций для интерфейсов классов.

```typescript
abstract class Duckable {
 abstract name: string;
 abstract fly(): void;

 getQuack(size: number): string {
   throw 'Unimplemented!';
 }

 static getQuack: AddSelf<Duckable['getQuack'], Duckable> = (self, size) => {
   if (size < 10) {
	 return 'quack!';
   }

   if (size < 20) {
	 return 'quack!!!';
   }

   return 'QUACK!!!';
 };
}


interface DuckLike extends Trait<typeof Duckable> {}

@derive(Duckable)
class DuckLike implements Duckable {
 name: string = 'Bob';

 fly(): void {
   // Do some logic to fly
 }
}

/// 'QUACK!!!'
console.log(new DuckLike().getQuack(60));
```

## Реализовать "строитель" для fetch запросов.

```js
const myUrlReq = Fetch
 .method('POST')
 .url('//my-url');

myUrlReq.query('a', 1)
 .query('b', 2)
 .body('application/json', {myData: 42})
 .send()
 .then(console.log);
```
