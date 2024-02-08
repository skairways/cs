// Обход дерева в ширину

// Необходимо вывести элементы дерева таким образом, чтобы по очереди выводились все элементы каждого яруса.

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 4 }],
    },
    {
      value: 3,
    },
  ],
};

function log(tree) {
  if (typeof tree === "object") {
    const stack = [];
    console.log(tree.value);
    if (tree.children) {
      tree.children.forEach((child) => {
        console.log(child.value);
        if (child.children) stack.push(...child.children);
      });
      stack.forEach((child) => log(child));
    }
  }
}

log(tree); // 1 2 3 4
