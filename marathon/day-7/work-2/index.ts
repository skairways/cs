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

function log(node) {
  const queue = [node]

  while(queue.length > 0) {
    const head = queue.shift()
    console.log(head.value)
    head.children?.forEach(child => {
      queue.push(child)
    });
  }
}

log(tree); // 1 2 3 4
