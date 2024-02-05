// Нахождение максимальной глубины в дереве

// Необходимо написать функцию, которая бы возвращала максимальную глубину заданного дерева.

const tree = {
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

console.log(maxDepth(tree)); // 2
