// Необходимо написать функцию sleep, которая бы принимала заданное количество миллисекунд и возвращала Promise.

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

SyncPromise.resolve(1).then(console.log); // 1
console.log(2);                           // 2

// Реализовать все статические методы Promise в SyncPromise *