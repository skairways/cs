const format = (str: string, obj) => {
  return str.replaceAll(/\$\{(.*?)\}/g, (_, key) => {
    let num = false;
    const data = key.replace(/\w+/, (v) => {
      num = !isNaN(obj[v]);
      return obj[v];
    });
    return num ? eval(data) : data;
  });
};

const res = format("Hello ${name}! May age is ${age * 2}.", {
  name: "Bob",
  age: 12,
}); // 'Hello Bob! My age is 24.'
console.log(res);
