// Сжатие глубокого объекта

// Необходимо написать функцию, которая бы сжимала некоторый глубокий объект в плоский вид.

const collapseObj = {
  a: {
    b: [1, 2],
    "": { c: 2 },
  },
};

/* {'a.b.0': 1, 'a.b.1': 2, 'a..c': 2} */
console.log(collapse(collapseObj));

function collapse(collapseObj) {
  const res = {};

  traverse(collapseObj, "");
  return res;

  function traverse(obj, path) {
    if (typeof obj !== "object") {
      res[path] = obj;
      return;
    }
    for (const key in obj) {
      traverse(obj[key], path ? `${path}.${key}` : key);
    }
  }
}
