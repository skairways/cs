// Написать класс числа с рекурсивным API для арифметических операций

// Необходимо проанализировать пример ниже и реализовать нужный API, где

// 1. add - сложение
// 2. sub - вычитание
// 3. mult - умножение
// 4. div - деление

class MyNumber {
  protected myNumber: number;
  constructor(protected num: number) {
    this.myNumber = num;
  }

  add(input: number): any {
    return new MyNumber(this.myNumber + input);
  }

  sub(input: number): any {
    return new MyNumber(this.myNumber - input);
  }

  mult(input: number): any {
    return new MyNumber(this.myNumber * input);
  }

  div(input: number): any {
    return new MyNumber(this.myNumber / input);
  }

  [Symbol.toPrimitive]() {
    return this.myNumber;
  }
}

const num = new MyNumber(10);

console.log(num.add(2).mult(2).sub(1) - 5); // 18
