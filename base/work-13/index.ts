// console.log(/^[\w$]*$/.test('привет'))

// console.log('762120,0,22;763827,0,50;750842,0,36;749909,0,95;755884,0,41;'.split(/,.*?;/).slice(0, -1))

// console.log([...'{"a": 1, "b": "2"}'.matchAll(/"(?<k>.*?)":\s(?<v>.*?)(?=[,}])/g)])

// const format = (str, obj) => {
//   return str.replaceAll(/\${(.*?)}/g, (_, key) => obj[key]);
// };

// Hello, Bob! Your age is 10.
// const res = format("Hello, ${user}! Your age is ${age}.", {
//   user: "Bob",
//   age: 10,
// });
// console.log(res)

// calc(`Какой-то текст (10 + 15 - 24) ** 2 Еще какой то текст 2 * 10`) == `Какой-то текст 1 Еще какой-то текст 20`

// const calc = (str) => {
//   return str.replace(/\(*\d+[-+*()\s1-9]+\d+\)*/g, (arg) => {
//     return eval(arg)
//   });
// };

// console.log(
//   calc(`Какой-то текст (10 + 15 - 24) ** 2 Еще какой то текст 2 * 10`)
// );
