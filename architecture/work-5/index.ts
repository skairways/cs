// Написать типовую функцию HasTail

//* Необходимо написать типовую функцию HasTail, которая возвращает true, если у переданного массива или кортежа есть хвостовая часть.

type HasTail<T extends any[]> = T extends [any, any, ...any] ? true : false;

const hasTail1: HasTail<[1, 2, 3]> = true;
const hasTail2: HasTail<[1]> = false;
const hasTail3: HasTail<[]> = false;

// Написать типовую функцию Last

//* Необходимо написать типовую функцию Last, которая возвращает последний элемент переданного массива или кортежа.

type Last<T extends any[]> = T extends [...any, infer L] ? L : never;

const last1: Last<[1, 2, 3]> = 3;
const last2: Last<[1]> = 1;
// never
let last3: Last<[]>;

// Написать типовую функцию IterableType

//* Необходимо написать типовую функцию IterableType, которая возвращает тип элемента переданного Iterable или AsyncIterable объекта.

type IterableType<T extends AsyncIterable<any> | IterableType<any>> =
  T extends AsyncIterable<infer V>
    ? V
    : T extends Iterable<infer V>
    ? V
    : never;

// number
let iter1: IterableType<[1, 2, 3]>;

// string
let iter2: IterableType<Set<string>>;

// {a: number}
let iter3: IterableType<AsyncIterable<{ a: number }>>;

//* Написть типовую функцию Drop

// Необходимо написать типовую функцию Drop, которая удаляет первые N Элементов из заданного массива или кортежа и возвращает массив удалаенных элементов.

type Length<A extends any[]> = A extends { length: infer L extends number }
  ? L
  : never;
type Tail<T extends any[]> = T extends [any, ...infer H] ? H : T;
type Head<A extends any[]> = A extends [infer T, ...any] ? T : A;

type Drop<N extends number, T extends any[], R extends any[] = []> = {
  0: R;
  1: Drop<N, Tail<T>, [...R, Head<T>]>;
}[Length<T> extends 0 ? 0 : Length<R> extends N ? 0 : 1];

const drop1: Drop<2, [1, 2, 3]> = [1, 2];
const drop2: Drop<1, [1, 2, 3]> = [1];
const drop3: Drop<3, []> = [];

//* Написать типовую функцию Overwrite

//Необходимо написать типовую функцию Overwrite, которая принимает 2 объекта и возвращает новый, в котором коллизии свойств разрешаются в сторону второго объекта.

type Overwrite<A extends object, B extends object> = Omit<A, keyof B> & B;

const overwrite1: Overwrite<
  { a: number; b: string },
  { b: number; c: boolean }
> = {
  a: 1,
  b: 10,
  c: true,
};

// Написать типовую функцию Reverse

// Необходимо написать типовую функцию Reverse, которая возвращает переданный массив или кортеж в обратном порядке и возвращает массив удаленных элементов.

type Pop<T extends any[]> = T extends [...any, infer V] ? V : T;

type Reverse<T extends any[], R extends any[] = []> = Length<T> extends 0
  ? R
  : Reverse<Tail<T>, [Head<T>, ...R]>;

const reverse1: Reverse<[1, 2, 3]> = [3, 2, 1];
const reverse2: Reverse<[1]> = [1];
const reverse3: Reverse<[]> = [];
