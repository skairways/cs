# ДЗ к лекции Архитектура#1

## Написать модуль для хранения данных вида ключ-значение

Данные должны храниться либо с помощью LocalStorage или document.cookie.
Сборка библиотеки должна делаться через Webpack и TypeScript с настройкой paths.
Модуль должен быть разбит на логические подмодули.

```js
import { cookieStorage } from 'kv-storage'; 

cookieStorage.set('foo', 1);

console.log(cookieStorage.get('foo')); // 1 и это число
```
