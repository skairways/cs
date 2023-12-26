// Необходимо написать функцию sleep, которая бы принимала заданное количество миллисекунд и возвращала Promise.

import { allLimit } from "./all-limit";
import { promisify } from "./promisify";
import { sleep } from "./sleep";
import { SyncPromise } from "./sync-promise";

// sleep(100).then(() => {
//  console.log(`I'am awake!`);
// });

// Необходимо написать функцию timeout, которая бы принимала Promise и заданное количество миллисекунд и возвращала Promise.
import { timeout } from "./timeout";

// Через 200 мс Promise будет зареджекчен
// timeout(fetch("//my-data"), 200).then(console.log).catch(console.error);

// Необходимо написать функцию setImmediate/clearImmediate по аналогии с node.js.

// import { clearImmediate, setImmediate } from "./immediate";

// const imId = setImmediate("ali");
// clearImmediate(imId);

//Необходимо написать функцию promisify, которая бы принимала функцию, где последний аргумент thunk-callback и возвращала бы новую функцию. Новая функция вместо thunk-callback будет возвращать Promise.

// function readFile(file, cb) {
//  cb(null, 'fileContent');
// }

// const readFilePromise = promisify(readFile);
// readFilePromise('my-file.txt').then(console.log).catch(console.error);

// Необходимо написать класс SyncPromise, аналогичный нативному, но работающий синхронно, если это возможно.

// SyncPromise.resolve(1)
//   .then()
//   .then((value) => value + 1)
//   .then(console.log)
//   .then(() => {
//     throw new Error("mine");
//   })
//   .catch((v) => console.error("errr", v))
//   .finally(() => console.log(`finally`)); // 1
// console.log(2); // 2

// Реализовать все статические методы Promise в SyncPromise *

// SyncPromise.any([1, SyncPromise.reject(2), SyncPromise.resolve(3)])
//   .then((winner) => {
//     console.log("The first fulfilled promise:", winner);
//     // Further processing with the first fulfilled value
//   })
//   .catch((errors) => {
//     console.error("All promises were rejected:", errors);
//   });

// console.log(2);

// Необходимо написать функцию allLimit, которая бы принимала Iterable функций, возвращающих Promise (или обычные значения) и лимит одновременных Promise.
// Одновременно не должно быть более заданного числа Promise в Pending.

// allLimit(
//   [
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then((res) => res.json())
//       .then((obj) => obj.message),
//     fetch("https://dog.ceo/api/breed/hound/images")
//       .then((res) => res.json())
//       .then((obj) => obj.message),
//     fetch("https://dog.ceo/api/breed/hound/list")
//       .then((res) => res.json())
//       .then((obj) => obj.message),
//   ],
//   2
// )
//   .then(console.log)
//   .catch(console.error);
