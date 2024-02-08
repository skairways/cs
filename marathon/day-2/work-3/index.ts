// Нахождение максимальной глубины в дереве

// Необходимо написать функцию, которая бы возвращала максимальную глубину заданного дерева.

const vTree = {
  value: "foo",
  children: [
    {
      value: "bar",
    },
    {
      value: "bla",
      children: [{ value: "baz" }],
    },
  ],
};

function maxDepth(absTree, length = 0) {
  
}

console.log(maxDepth(vTree)); // 2
