// Кастомный toString
import "./capitalize";
import { addToString } from "./add-to-string";

//Необходимо сделать конкретному массиву метод toString, который возвращает первый элемент .. последний.

// 1..4
// console.log(addToString([1, 2, 3, 4]).toString());

// 1
// addToString([1]).toString();

//
// addToString([]).toString();

// Расширить объект-обертку строки (String.prototype)

// Необходимо добавить все строкам в JavaScript метод capitalize, который делает первую букву в строке заглавной.

//@ts-ignore
console.log("foo".capitalize()); // Foo
