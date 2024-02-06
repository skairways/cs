// Написать класс числа с рекурсивным API для арифметических операций

// Необходимо проанализировать пример ниже и реализовать нужный API, где

// 1. add - сложение
// 2. sub - вычитание
// 3. mult - умножение
// 4. div - деление

class MyNumber {
  private myNum: number
  constructor(protected num: number) {
    this.myNum = num
  }

  add(num: number) {
    return new MyNumber(this.myNum)
  }
  mult(num: number) {
    
  }
  sub(num: number) {
    return new MyNumber(this.myNum)
  }
  div(num: number) {}
  
}

const num = new MyNumber(10);

console.log(num.add(2).mult(2)/* .sub(1) - 5 */); // 18
