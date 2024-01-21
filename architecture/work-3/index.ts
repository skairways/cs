// Реализация partial классов с поддержкой super

import { MRUCache } from "./cache";
import { extend } from "./extend";

// Необходимо написать функцию extend, которая позволит расширять прототип класса новыми свойствами и методами. Ключевое словое super внутри методов должно работать корректно.

class Foo {
  get42() {
    return 42;
  }
}

class Bar extends Foo {}

extend(Bar, {
  get overloaded42() {
    return this.get42();
  },

  get42() {
    return super.get42() * 10;
  },
});

// console.log(new Bar().get42());

// Реализовать классы для кеширования любых значений

//Необходимо реализовать классы кеширования значений используя алгоритмы LRU, MRU и Never (заглушка). У классов должен быть общий родитель для корректной работы полморфизма подтипов.

const mruCache = new MRUCache(3);
mruCache.set("bob", 42);
mruCache.set("ali", "dickhead");
mruCache.set("alice", 43);
console.log(mruCache.get("bob"));
mruCache.set("vali", 44);
console.log(mruCache.get("bob"));

//1:50
