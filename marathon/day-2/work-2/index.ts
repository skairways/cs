// Установка свойства по сложному пути в объекте

// Необходимо написать функцию, которая бы устанавливало переданное значение объекту по заданному пути.

const obj = {};

setByPath(obj, "foo.bar", 1);
setByPath(obj, "foo.bla", 2);

function setByPath(target: Object, path: string, value: unknown) {
  const keys = path.split(".");
  const curKey = keys[0];
  if (keys.length === 1) {
    target[curKey] = value;
    return;
  }
  target[curKey] = { ...target[curKey] };
  setByPath(target[curKey], keys.slice(1).join(""), value);
}

console.log(obj); // {foo: {bar: 1, bla: 2}}
