// Реализация структуры данных очередь

// Необходимо создать класс, который бы предоставлял API очереди.
// Использовать стандартное API массивов JS нельзя.

class Queue {
  queue = [];
  push(item) {
    this.queue[this.queue.length] = item;
    return this.queue;
  }
  pop() {
    
    return
  }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
console.log(queue.push(3));


console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
console.log(queue.pop()); // 3
console.log(queue.pop()); // undefined
