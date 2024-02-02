interface IObj {
  foo(): void;
  get bar(): number;
}

class Parent {
  foo() {
    console.log("It works!");
  }
}

interface Example extends IObj {}
class Example extends Parent {}

function partial(target, obj) {
  Object.setPrototypeOf(obj, Object.getPrototypeOf(target.prototype));
  Object.defineProperties(
    target.prototype,
    Object.getOwnPropertyDescriptors(obj)
  );
}

partial(Example, {
  foo() {
    super.foo();
    console.log("Yeaaah");
  },

  get bar() {
    return Math.random();
  },
});

const example = new Example();

example.foo(); // It works! Yeaaah

console.log(example.bar); // Случайное число
console.log(example.bar); // Случайное число
console.log(example.bar); // Случайное число
