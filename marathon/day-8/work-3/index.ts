// Сериализация нестандартных объектов

// Необходимо написать функцию, которая бы позволяла преобразовать заданные JS объекты в строку и обратно.

const original = {
  myDate: new Date(),
  mySet: new Set([1, 2, 3]),
  myMap: new Map([[new Date(), { a: 1 }]]),
};

const str = serialize(original);

// Объект должен иметь аналогичную структуру с original
console.log(parse(str));

function serialize(target) {
  return JSON.stringify(target, (_, value) => {
    if (value instanceof Date) {
      return { _type: "Date", _value: value.toISOString() };
    }
    if (value instanceof Set) {
      return { _type: "Set", _value: Array.from(value) };
    }
    if (value instanceof Map) {
      return {
        _type: "Map",
        _value: Array.from(value).map(([key, val]) => [
          serialize(key),
          serialize(val),
        ]),
      };
    }
    return value;
  });
}

function parse(str) {
  return JSON.parse(str, (_, value) => {
    if (value._type === "Date") {
      return new Date(value._value);
    }
    if (value._type === "Set") {
      return new Set(value._value);
    }
    if (value._type === "Map") {
      return new Map(
        value._value.map(([key, val]) => [parse(key), parse(val)])
      );
    }
    return value;
  });
}
