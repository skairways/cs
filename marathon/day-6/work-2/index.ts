// Написать простейший EventEmitter

// Должна быть поддержка множественных и одноразовых событий и отмены сразу всех событий по имени.

class EventEmitter {
  eventBus = new Map();

  once(event, cb) {
    let fns;
    if (this.eventBus.has(event)) {
      fns = this.eventBus.get(event);
    } else {
      fns = new Set();
    }
    fns.add(cb);
    this.eventBus.set(event, fns);
  }

  emit(event, ...args) {
    if (this.eventBus.has(event)) {
      const fns = this.eventBus.get(event);
      fns.forEach((fn) => fn.apply(this, args));
    }
  }

  off(event, cb?) {
    if (cb === undefined) {
      this.eventBus.clear();
    }

    if (this.eventBus.has(event) && cb) {
      const fns: Set<Function> = this.eventBus.get(event);
      fns.delete(cb);
    }
  }
}

const ee = new EventEmitter();

ee.once("foo", console.log); // Сработает только один раз

ee.emit("foo", 1);
ee.emit("foo", 2);

ee.off("foo", console.log); // Отмена конкретного обработчика события по ссылке

ee.off("foo"); // Отмена всех обработчиков этого события
